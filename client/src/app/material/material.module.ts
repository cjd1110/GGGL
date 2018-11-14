import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialRoute} from './material.route';
import {PracticeComponent} from './practice/practice.component';

@NgModule({
  imports: [
    MaterialRoute,
    CommonModule
  ],
  declarations: [
    PracticeComponent
  ],
  exports: [
    PracticeComponent
  ]
})
export class MaterialModule { }
