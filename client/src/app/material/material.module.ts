import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialRoute} from './material.route';
import {PracticeComponent} from './practice/practice.component';

import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducers/input.reducer';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    MaterialRoute,
    CommonModule,
    SharedModule,
    StoreModule.forRoot({
      input: reducer
    }),
  ],
  declarations: [
    PracticeComponent,
  ],
  exports: [
    PracticeComponent
  ]
})
export class MaterialModule { }
