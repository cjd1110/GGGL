import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter, Input,
  OnInit,
  Output, QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  toolbarColor: string;
  type: string;
  path: string;

  @Input() subMenu: string;
  @ViewChild('group') group: MatButtonToggleGroup;
  @ViewChildren('toggle') toggle: QueryList<MatButtonToggle>;
  @Output() outputType = new EventEmitter();
  navs: any[] = [];

  constructor(private cdr: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit() {
    this.navs = this.router.config[1].children;
  }

  ngAfterViewInit() {
    if (this.navs.length > 0) {
      this.toggle.first.checked = true;
      this.navigate(this.navs[0].data.nav.value);
      this.cdr.detectChanges();
    }
    this.changeButton();
  }

  clickAccount() {

  }

  getSubMenuClass(type) {
    let result = null;
    switch (type) {
      case 'chip-list':
        result = `${this.type}-menu`;
        break;
      case 'chip':
        result = `${this.type}-menu-chip`;
        break;
    }
    return result;
  }

  changeButton() {
    this.type = this.group.value;
    this.setOutputType();
  }

  setOutputType() {
    this.outputType.emit(this.type);
  }

  navigate(path: string) {
    this.changeButton();
    this.path = `/gggl/${path}`;
    this.router.navigateByUrl(this.path);
  }

  navigateSubMenu(subPath) {
    this.router.navigateByUrl(`${this.path}/${subPath}`);
  }
}
