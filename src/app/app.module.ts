import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Top1Component } from './top1/top1.component';
import { Top2Component } from './top2/top2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Top1Component,
    Top2Component,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
