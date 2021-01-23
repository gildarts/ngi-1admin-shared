import { GadgetService } from '@1campus/web-gadget';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-moe-course',
  template: `
    <div>
      <pre>{{schoolInfo | json}}</pre>
    </div>
  `,
  styles: [
  ]
})
export class MoeCourseComponent implements OnInit {

  accessPoint?: string;
  schoolInfo: any;

  constructor(
    private gadget: GadgetService
  ) { }

  async ngOnInit() {
    const contract = await this.gadget.getContract('basic.public');

    this.accessPoint = contract.getAccessPoint;

    // 呼叫 service。
    this.schoolInfo = await contract.send('beta.GetSystemConfig', {
      Name: '學校資訊'
    });
  }

}
