import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, mergeMap} from 'rxjs/operators';
import {FormControl} from "@angular/forms";

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
    const users$ = this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // 300ms 뒤에 데이터 전달
        distinctUntilChanged(), // 특수키가 입력된 경우에는 나오지 않기 위해 중복 데이터 처리
        filter(query => query.trim().length > 0),
        mergeMap(query => this.http.get(`https://api.github.com/search/users?q=${query}`)),
      );

    users$.subscribe(res => {
      this.users = res['items'];
    });
  }

  setType(type) {
    this.type = type;
    this.cdr.detectChanges();
  }
}
