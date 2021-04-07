import { MoeCourseModule } from '../../projects/moe-course/src/lib/ng/moe-course.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeTestComponent } from './node-test/node-test.component';
import { CoursePlanCompareComponent } from './course-plan-compare/course-plan-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeTestComponent,
    CoursePlanCompareComponent
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
