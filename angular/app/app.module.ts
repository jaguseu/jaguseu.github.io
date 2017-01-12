import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NewComponent }  from './new.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NewComponent ],
  bootstrap:    [ AppComponent, NewComponent ],
})
export class AppModule { }
