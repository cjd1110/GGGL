import {Component, OnInit} from '@angular/core';
import {animationFrameScheduler, concat, defer, fromEvent, interval, merge, Observable, of} from 'rxjs';
import {
  first,
  map,
  scan,
  share,
  startWith,
  switchMap,
  takeUntil, takeWhile,
  withLatestFrom
} from 'rxjs/operators';

const SUPPORT_TOUCH = 'ontouchstart' in window;
const THRESHOLD = 30;
const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-lol-news',
  templateUrl: './lol-news.component.html',
  styleUrls: ['./lol-news.component.scss']
})
export class LolNewsComponent implements OnInit {

  $view;
  $container: HTMLElement;
  PANEL_COUNT;

  constructor() {
  }

  ngOnInit() {
    this.$view = document.getElementById('carousel');
    this.$container = this.$view.querySelector('.container');
    this.PANEL_COUNT = this.$container.querySelectorAll('.panel').length;

    const EVENTS = {
      start: SUPPORT_TOUCH ? 'touchstart' : 'mousedown',
      move: SUPPORT_TOUCH ? 'touchmove' : 'mousemove',
      end: SUPPORT_TOUCH ? 'touched' : 'mouseup'
    };

    const start$ = fromEvent(this.$view, EVENTS.start).pipe(this.toPos);
    const move$ = fromEvent(this.$view, EVENTS.move).pipe(this.toPos);
    const end$ = fromEvent(this.$view, EVENTS.end);

    const size$ = fromEvent(window, 'resize')
      .pipe(
        startWith(0),
        map(event => this.$view.clientWidth)
      );

    const drag$ = start$.pipe(
      switchMap(start => {
        return move$.pipe(
          map(move => move - start),
          takeUntil(end$),
        );
      }),
      share(),
      map(distance => ({distance}))
    );

    // take(1) == first() operator는 같다.
    const drop$ = drag$
      .pipe(
        switchMap(drag => {
          return end$.pipe(
            map(event => drag), // drag는 drag$가 전달하는 start$와 move$의 위치 값의 거리
            first()
          );
        }),
        withLatestFrom(size$, (drag, size) => {
          return {...drag, size};
        })
      );

    const carousel$ = merge(drag$, drop$)
      .pipe(
        scan((st, {distance, size}) => {
          const updateStore = {
            from: -(st.index * st.size) + distance,
            to: 0,
            index: 0,
            size: 0,
            distance: distance,
          };

          if (size === undefined) { // drag 시점
            updateStore.to = updateStore.from;
          } else { // drop 시점
            let tobeIndex = st.index;
            if (Math.abs(distance) >= THRESHOLD) {
              tobeIndex = Number(distance) < 0 ?
                Math.min(tobeIndex + 1, this.PANEL_COUNT - 1) :
                Math.max(tobeIndex - 1, 0);
            }
            updateStore.index = tobeIndex;
            updateStore.to = -(tobeIndex * size);
            updateStore.size = size;
          }
          return {...st, ...updateStore};
        }, {
          from: 0,
          to: 0,
          index: 0,
          size: 0,
          distance: 0,
        }),
        switchMap(({from, to, index, size, distance}) => from === to ? of(to) : this.animation(from, to, DEFAULT_DURATION))
      );

    carousel$.subscribe(pos => {
      console.log('캐러셀 데이터 : ', pos);
      this.translateX(pos);
    });
  }

  animation(from , to, duration){
    return defer(() => {
      const scheduler = animationFrameScheduler;
      const start = scheduler.now();
      const interval$ = interval(0, scheduler)
        .pipe(
          map(() => (scheduler.now() - start) / duration),
          takeWhile(rate => rate < 1)
        );
      return concat(interval$, of(1))
        .pipe(
          map(rate => from + (to - from) * rate)
        );
    });
  }

  toPos(obs$): Observable<number> {
    return obs$
      .pipe(
        map(v => SUPPORT_TOUCH ? event['changedTouches'][0].pageX : event['pageX'])
      );
  }

  translateX(posX) {
    this.$container.style.transform = `translate3d(${posX}px, 0, 0 )`;
  }

}
