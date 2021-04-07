import { Component, OnInit } from '@angular/core';
import { CourseCode, Field } from 'projects/moe-course/src/public-api';

@Component({
  selector: 'app-node-test',
  templateUrl: './node-test.component.html',
  styleUrls: ['./node-test.component.scss']
})
export class NodeTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const cc = new CourseCode('108041305H11101A1010101');
    
    console.log(cc.getCode(Field.N02));
  }

}
