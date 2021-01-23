import { NgModule } from '@angular/core';
import { MoeCourseComponent } from './moe-course.component';
import { WebGadgetModule } from '@1campus/web-gadget';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [MoeCourseComponent],
  imports: [
    CommonModule,
    WebGadgetModule
  ],
  exports: [MoeCourseComponent]
})
export class MoeCourseModule { }
