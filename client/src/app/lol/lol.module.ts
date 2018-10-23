import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LolNewsComponent} from './lol-news/lol-news.component';
import {LolRoute} from './lol.route';

@NgModule({
  imports: [
    CommonModule,
    LolRoute,
  ],
  declarations: [
    LolNewsComponent
  ],
  exports: [
    LolNewsComponent
  ],
})
export class LolModule {
}
