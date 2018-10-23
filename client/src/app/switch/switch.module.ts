import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchNewsComponent } from './switch-news/switch-news.component';
import {SwitchRoute} from './switch.route';

@NgModule({
  imports: [
    SwitchRoute,
    CommonModule
  ],
  declarations: [
    SwitchNewsComponent
  ],
  exports: [
    SwitchNewsComponent
  ]
})
export class SwitchModule { }
