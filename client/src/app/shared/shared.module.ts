import { NgModule } from '@angular/core';
import {TopNavComponent} from './components/top-nav/top-nav.component';
import {
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {CommonModule} from '@angular/common';
import { BottomComponent } from './components/bottom/bottom.component';

@NgModule({
  declarations: [
    TopNavComponent,
    BottomComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatTabsModule,
    MatListModule,
  ],
  providers: [],
  exports: [
    TopNavComponent,
    BottomComponent,
    MatToolbarModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule,
    MatTabsModule,
    MatListModule,
  ]
})
export class SharedModule { }
