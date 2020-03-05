import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule, MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AgWordCloudModule} from 'angular4-word-cloud';
import {TagCloudModule} from 'angular-tag-cloud-module';

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
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    AgWordCloudModule.forRoot(),
    TagCloudModule
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
    MatCardModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    AgWordCloudModule,
    TagCloudModule
  ]
})
export class SharedModule {}
