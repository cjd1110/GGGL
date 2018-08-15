import { NgModule } from '@angular/core';
import {TopNavComponent} from './components/top-nav/top-nav.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    TopNavComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  exports: [
    TopNavComponent,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule { }
