import { Component, OnInit } from '@angular/core';
import { MOEService } from 'projects/moe-course/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nglib-moe-course';

  codes: any;

  constructor(
    private moe: MOEService
  ) {}

  async ngOnInit() {
    this.codes = await this.moe.getCourseCodeTable('108041305H11101A');
  }
}
