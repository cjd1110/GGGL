import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Ps4NewsComponent} from './ps4-news/ps4-news.component';
import {Ps4Route} from './ps4.route';

@NgModule({
  imports: [
    Ps4Route,
    CommonModule
  ],
  declarations: [
    Ps4NewsComponent
  ],
  exports: [
    Ps4NewsComponent
  ]
})
export class Ps4Module {
}
