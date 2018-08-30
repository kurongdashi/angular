import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { My } from './my';

@NgModule({
  declarations: [
    My
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [My]
})
export class MyModule { }
