import { MoeCourseModule } from './../../projects/moe-course/src/lib/moe-course.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoeCourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
