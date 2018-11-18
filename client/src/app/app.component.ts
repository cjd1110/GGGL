import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';

import {
  debounceTime,
  distinctUntilChanged, finalize,
  partition, retry,
  switchMap,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  type = null;
  subMenu: any[] = [];
  users = [];
  searchControl = new FormControl();

  constructor(private cdr: ChangeDetectorRef,
              private router: Router,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const child = this.activatedRoute.firstChild;
        const routeConfig = child.routeConfig;
        const module = routeConfig.children.filter(item => item.path === this.type)[0];
        if (module.hasOwnProperty('_loadedConfig')) {
          this.subMenu = module['_loadedConfig'].routes[1].children;
        }
      }
    });
  }

  ngAfterViewInit() {
    // github id search로 angular & rxjs sample code
    const keyup$ = this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // 300ms 뒤에 데이터 전달
        distinctUntilChanged(), // 특수키가 입력된 경우에는 나오지 않기 위해 중복 데이터 처리
      );

    // 단순히 query만 사용할 경우 type error 가 발생함 Object를 string으로 변환 후 사용
    // 처음 글자 입력시 length가 3부터 시작이라 -2 함
    // partition 함수가 rxjs 에서 문제가 발생하는 경우가 많아 폐지 예정이라고 함
    // https://github.com/ReactiveX/rxjs/issues/2995
    let [users$, reset$] = partition(query => {
      return JSON.stringify(query).trim().length - 2 > 0;
    })(keyup$);

    users$ = users$
      .pipe(
        tap(this.showLoading),
        switchMap(query => this.http.get(`https://api.github.com/search/users?q=${query}`)),
        tap(this.hideLoading),
        retry(2),
        finalize(this.hideLoading)
      );

    users$.subscribe({
      next: value => this.users = value['items'],
      error: error => {
        console.error(error);
        alert(error.message);
      }
    });

    reset$.pipe(
      tap(v => this.users = [])
    ).subscribe();
  }

  showLoading() {
    document.getElementById('loading').style.display = 'block';
  }

  hideLoading() {
    document.getElementById('loading').style.display = 'none';
  }

  setType(type) {
    this.type = type;
    this.cdr.detectChanges();
  }
}
