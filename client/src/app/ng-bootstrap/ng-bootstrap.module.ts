import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PracticeComponent} from './practice/practice.component';
import {NgBootstrapRoute} from './ng-bootstrap.route';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgBootstrapRoute,
    CommonModule,
    NgbModule
  ],
  declarations: [
    PracticeComponent
  ],
  exports: [
    PracticeComponent
  ]
})
export class NgBootstrapModule { }
