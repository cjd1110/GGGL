import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PracticeComponent} from './practice/practice.component';
import {NgBootstrapRoute} from './ng-bootstrap.route';

@NgModule({
  imports: [
    NgBootstrapRoute,
    CommonModule
  ],
  declarations: [
    PracticeComponent
  ],
  exports: [
    PracticeComponent
  ]
})
export class NgBootstrapModule { }
