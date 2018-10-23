import {NgModule} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
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
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
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
    HeaderComponent,
    FooterComponent,
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
export class SharedModule {
}
