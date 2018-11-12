import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  type = null;
  subMenu: any[] = [];

  constructor(private cdr: ChangeDetectorRef,
              private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let child = this.activatedRoute.firstChild;
        let routeConfig = child.routeConfig;
        console.log('this.type : ', this.type);
        let module = routeConfig.children.filter(item => item.path === this.type)[0];
        if (module.hasOwnProperty('_loadedConfig')) {
          console.log('path : ', module);
          this.subMenu = module['_loadedConfig'].routes[0].children;
          console.log('subMenu : ', this.subMenu);
        }
      }
    });
  }

  ngAfterViewInit() {
  }

  setType(type) {
    this.type = type;
    this.cdr.detectChanges();
  }
}
