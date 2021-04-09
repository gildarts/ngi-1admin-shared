import { NgModule } from '@angular/core';
import { WebGadgetModule } from '@1campus/web-gadget';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    WebGadgetModule
  ],
  exports: []
})
export class MoeCourseNgModule { }
