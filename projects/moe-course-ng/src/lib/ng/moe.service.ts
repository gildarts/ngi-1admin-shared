import { GadgetService } from '@1campus/web-gadget';
 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListCode } from 'moe-course';

@Injectable({
  providedIn: 'root'
})
export class MOEService {

  constructor(
    private http: HttpClient,
    private gadget: GadgetService
  ) { }

  /** 課程類型 */
  public getList(name: ListCode) {
    return this.http.get<any>(`https://console.1campus.net/api/moeproxy/code_table/${name.toString()}`);
  }

  /** 取得群組的前 16 碼相同的所有科目代碼。 */
  public async getCourseCodeTable(groupCode: string): Promise<SixteenResponse> {
    const gp = await this.gadget.getContract('1campus.graduation_plan');
    return await gp.send('MOE.GetCourseCodeTable', {
      GroupCode: groupCode,
    });
  }
}

export interface SixteenResponse {
  Response: CodeList;
}

export interface CodeList {
  Code: CodeData[];
}

export interface CodeData {
  group_code: string;
  course_code: string;
  subject_name: string;
  credits: string;
}
