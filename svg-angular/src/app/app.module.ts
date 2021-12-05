import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgIconsRepoComponent } from './svg-icons/svg-icons-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgIconsRepoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
