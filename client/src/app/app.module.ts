import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {Route} from './app.route';
import {SharedModule} from './shared/shared.module';
import {AgWordCloudModule} from 'angular4-word-cloud';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgWordCloudModule.forRoot(),
    Route,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
