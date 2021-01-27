import { Component, OnInit } from '@angular/core';
import { CourseCodeService, DiffSubject, GraduationPlan, MOEService } from 'projects/moe-course/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nglib-moe-course';

  codes: any;

  diff?: DiffSubject[];

  gp_diff: any;

  gpm_diff: any;

  constructor(
    private ccsrv: CourseCodeService,
  ) {}

  async ngOnInit() {

    const gp = GraduationPlan.parse(GPXML);
    const gpm = GraduationPlan.parse(GPXML_Merge);
    const cc = await this.ccsrv.getCourseCodeTable('109120401V223030');

    this.diff = gp.diff(cc);
    this.gp_diff = [];
    for(const v of this.diff!) {
      this.gp_diff.push({
        status: v.status,
        origin: {
          subjName: v.subjectName,
          entry: v.entry,
          domain: v.domain,
          credit: v.credits.unifiedKey
        },
        new: {
          entry: v.newEntry,
          domain: v.newDomain,
          credit: v.newCredits?.unifiedKey
        }
      });
    }

    this.diff = gpm.diff(cc);
    this.gpm_diff = [];
    for(const v of this.diff!) {
      this.gpm_diff.push({
        status: v.status,
        origin: {
          subjName: v.subjectName,
          entry: v.entry,
          domain: v.domain,
          credit: v.credits.unifiedKey
        },
        new: {
          entry: v.newEntry,
          domain: v.newDomain,
          credit: v.newCredits?.unifiedKey
        }
      });
    }
  }
}

const GPXML = `<GraduationPlan SchoolYear="109">
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="1" FullName="國語文 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="國語文" 課程代碼="">
    <Grouping RowIndex="1" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="2" FullName="國語文 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="國語文" 課程代碼="">
    <Grouping RowIndex="1" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="1" FullName="國語文 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="國語文" 課程代碼="">
    <Grouping RowIndex="1" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="2" FullName="國語文 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="國語文" 課程代碼="">
    <Grouping RowIndex="1" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="1" FullName="國語文 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="國語文" 課程代碼="">
    <Grouping RowIndex="1" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="2" FullName="國語文 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="國語文" 課程代碼="">
    <Grouping RowIndex="1" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="1" FullName="英語文 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="英語文" 課程代碼="">
    <Grouping RowIndex="2" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="2" FullName="英語文 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="英語文" 課程代碼="">
    <Grouping RowIndex="2" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="1" FullName="英語文 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="英語文" 課程代碼="">
    <Grouping RowIndex="2" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="2" FullName="英語文 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="英語文" 課程代碼="">
    <Grouping RowIndex="2" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="1" FullName="英語文 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="英語文" 課程代碼="">
    <Grouping RowIndex="2" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="2" FullName="英語文 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="英語文" 課程代碼="">
    <Grouping RowIndex="2" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="數學" Entry="學業" GradeYear="1" Level="1" FullName="數學 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="數學" 課程代碼="">
    <Grouping RowIndex="3" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="數學" Entry="學業" GradeYear="1" Level="2" FullName="數學 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="數學" 課程代碼="">
    <Grouping RowIndex="3" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="數學" Entry="學業" GradeYear="1" Level="1" FullName="數學 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="數學" 課程代碼="">
    <Grouping RowIndex="3" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="數學" Entry="學業" GradeYear="1" Level="2" FullName="數學 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="數學" 課程代碼="">
    <Grouping RowIndex="3" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="數學" Entry="學業" GradeYear="1" Level="1" FullName="數學 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="數學" 課程代碼="">
    <Grouping RowIndex="3" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="數學" Entry="學業" GradeYear="1" Level="2" FullName="數學 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="數學" 課程代碼="">
    <Grouping RowIndex="3" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="歷史 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="4" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="歷史 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="4" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="社會" Entry="學業" GradeYear="2" Level="3" FullName="歷史 III" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="4" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="歷史 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="4" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="歷史 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="4" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="社會" Entry="學業" GradeYear="2" Level="3" FullName="歷史 III" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="4" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="地理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="地理" 課程代碼="">
    <Grouping RowIndex="5" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="地理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="地理" 課程代碼="">
    <Grouping RowIndex="5" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="地理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="地理" 課程代碼="">
    <Grouping RowIndex="5" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="物理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="物理" 課程代碼="">
    <Grouping RowIndex="6" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="物理 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="物理" 課程代碼="">
    <Grouping RowIndex="6" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="物理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="物理" 課程代碼="">
    <Grouping RowIndex="6" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="物理 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="物理" 課程代碼="">
    <Grouping RowIndex="6" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="物理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="物理" 課程代碼="">
    <Grouping RowIndex="6" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="物理 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="物理" 課程代碼="">
    <Grouping RowIndex="6" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="生物 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="生物" 課程代碼="">
    <Grouping RowIndex="7" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="生物 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="生物" 課程代碼="">
    <Grouping RowIndex="7" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術" Entry="學業" GradeYear="1" Level="1" FullName="音樂 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="音樂" 課程代碼="">
    <Grouping RowIndex="8" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術" Entry="學業" GradeYear="1" Level="2" FullName="音樂 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="音樂" 課程代碼="">
    <Grouping RowIndex="8" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術" Entry="學業" GradeYear="1" Level="1" FullName="音樂 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="音樂" 課程代碼="">
    <Grouping RowIndex="8" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術" Entry="學業" GradeYear="1" Level="2" FullName="音樂 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="音樂" 課程代碼="">
    <Grouping RowIndex="8" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術" Entry="學業" GradeYear="1" Level="1" FullName="音樂 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="音樂" 課程代碼="">
    <Grouping RowIndex="8" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術" Entry="學業" GradeYear="1" Level="2" FullName="音樂 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="音樂" 課程代碼="">
    <Grouping RowIndex="8" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="綜合活動" Entry="學業" GradeYear="1" Level="1" FullName="生涯規劃 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="生涯規劃" 課程代碼="">
    <Grouping RowIndex="9" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="綜合活動" Entry="學業" GradeYear="1" Level="2" FullName="生涯規劃 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="生涯規劃" 課程代碼="">
    <Grouping RowIndex="9" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="綜合活動" Entry="學業" GradeYear="1" Level="1" FullName="生涯規劃 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="生涯規劃" 課程代碼="">
    <Grouping RowIndex="9" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="綜合活動" Entry="學業" GradeYear="1" Level="2" FullName="生涯規劃 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="生涯規劃" 課程代碼="">
    <Grouping RowIndex="9" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="綜合活動" Entry="學業" GradeYear="1" Level="1" FullName="生涯規劃 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="生涯規劃" 課程代碼="">
    <Grouping RowIndex="9" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="綜合活動" Entry="學業" GradeYear="1" Level="2" FullName="生涯規劃 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="生涯規劃" 課程代碼="">
    <Grouping RowIndex="9" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="1" FullName="資訊科技 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="資訊科技" 課程代碼="">
    <Grouping RowIndex="10" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="2" FullName="資訊科技 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="資訊科技" 課程代碼="">
    <Grouping RowIndex="10" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="1" FullName="資訊科技 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="資訊科技" 課程代碼="">
    <Grouping RowIndex="10" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="2" FullName="資訊科技 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="資訊科技" 課程代碼="">
    <Grouping RowIndex="10" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="1" FullName="資訊科技 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="資訊科技" 課程代碼="">
    <Grouping RowIndex="10" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="2" FullName="資訊科技 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="資訊科技" 課程代碼="">
    <Grouping RowIndex="10" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="健康與體育" Entry="學業" GradeYear="1" Level="1" FullName="體育 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="體育" 課程代碼="">
    <Grouping RowIndex="12" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="健康與體育" Entry="學業" GradeYear="1" Level="2" FullName="體育 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="體育" 課程代碼="">
    <Grouping RowIndex="12" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="全民國防教育" Entry="學業" GradeYear="1" Level="1" FullName="全民國防教育 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="全民國防教育" 課程代碼="">
    <Grouping RowIndex="13" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="全民國防教育" Entry="學業" GradeYear="1" Level="2" FullName="全民國防教育 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="全民國防教育" 課程代碼="">
    <Grouping RowIndex="13" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="全民國防教育" Entry="學業" GradeYear="1" Level="1" FullName="全民國防教育 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="全民國防教育" 課程代碼="">
    <Grouping RowIndex="13" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="全民國防教育" Entry="學業" GradeYear="1" Level="2" FullName="全民國防教育 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="全民國防教育" 課程代碼="">
    <Grouping RowIndex="13" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="全民國防教育" Entry="學業" GradeYear="1" Level="1" FullName="全民國防教育 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="全民國防教育" 課程代碼="">
    <Grouping RowIndex="13" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="全民國防教育" Entry="學業" GradeYear="1" Level="2" FullName="全民國防教育 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="全民國防教育" 課程代碼="">
    <Grouping RowIndex="13" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="公民與社會 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="公民與社會" 課程代碼="">
    <Grouping RowIndex="14" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="公民與社會 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="公民與社會" 課程代碼="">
    <Grouping RowIndex="14" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="公民與社會 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="公民與社會" 課程代碼="">
    <Grouping RowIndex="14" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="公民與社會 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="公民與社會" 課程代碼="">
    <Grouping RowIndex="14" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="公民與社會 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="公民與社會" 課程代碼="">
    <Grouping RowIndex="14" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="公民與社會 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="公民與社會" 課程代碼="">
    <Grouping RowIndex="14" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="化學 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="化學" 課程代碼="">
    <Grouping RowIndex="15" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="化學 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="化學" 課程代碼="">
    <Grouping RowIndex="15" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="化學 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="化學" 課程代碼="">
    <Grouping RowIndex="15" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="化學 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="化學" 課程代碼="">
    <Grouping RowIndex="15" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="化學 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="化學" 課程代碼="">
    <Grouping RowIndex="15" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="化學 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="化學" 課程代碼="">
    <Grouping RowIndex="15" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="特殊需求領域 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="特殊需求領域" 課程代碼="">
    <Grouping RowIndex="16" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="特殊需求領域 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="特殊需求領域" 課程代碼="">
    <Grouping RowIndex="16" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="特殊需求領域 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="特殊需求領域" 課程代碼="">
    <Grouping RowIndex="16" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="特殊需求領域 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="特殊需求領域" 課程代碼="">
    <Grouping RowIndex="16" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="特殊需求領域 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="特殊需求領域" 課程代碼="">
    <Grouping RowIndex="16" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="特殊需求領域 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="特殊需求領域" 課程代碼="">
    <Grouping RowIndex="16" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="歷史 II" NotIncludedInCalc="False" NotIncludedInCredit="False" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="歷史" 課程代碼="109070406M1119607010309" 課程類別="校訂選修" 開課方式="原班級" 科目屬性="一般科目" 領域名稱="社會" 課程名稱="歷史" 學分="2" 授課學期學分="020000">
    <Grouping RowIndex="17" startLevel="2"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="歷史 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="17" startLevel="2"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="歷史 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="17" startLevel="2"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="地理 II" NotIncludedInCalc="False" NotIncludedInCredit="False" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="地理" 課程代碼="109070406M111960701030A" 課程類別="校訂選修" 開課方式="原班級" 科目屬性="一般科目" 領域名稱="社會" 課程名稱="地理" 學分="2" 授課學期學分="020000">
    <Grouping RowIndex="18" startLevel="2"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="地理 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="地理" 課程代碼="">
    <Grouping RowIndex="18" startLevel="2"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="地理 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="地理" 課程代碼="">
    <Grouping RowIndex="18" startLevel="2"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="地球科學 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="地球科學" 課程代碼="">
    <Grouping RowIndex="19" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="地球科學 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="地球科學" 課程代碼="">
    <Grouping RowIndex="19" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="地球科學 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="地球科學" 課程代碼="">
    <Grouping RowIndex="19" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="地球科學 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="地球科學" 課程代碼="">
    <Grouping RowIndex="19" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="地球科學 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="地球科學" 課程代碼="">
    <Grouping RowIndex="19" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="地球科學 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="地球科學" 課程代碼="">
    <Grouping RowIndex="19" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="1" FullName="生活科技 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="生活科技" 課程代碼="">
    <Grouping RowIndex="20" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="2" FullName="生活科技 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="生活科技" 課程代碼="">
    <Grouping RowIndex="20" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="1" FullName="生活科技 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="生活科技" 課程代碼="">
    <Grouping RowIndex="20" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="2" FullName="生活科技 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="生活科技" 課程代碼="">
    <Grouping RowIndex="20" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="1" FullName="生活科技 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="生活科技" 課程代碼="">
    <Grouping RowIndex="20" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="2" FullName="生活科技 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="生活科技" 課程代碼="">
    <Grouping RowIndex="20" startLevel="1"/>
</Subject>
<Subject Category="" Credit="3" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="團體活動時間 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="團體活動時間" 課程代碼="">
    <Grouping RowIndex="21" startLevel="1"/>
</Subject>
<Subject Category="" Credit="3" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="團體活動時間 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="團體活動時間" 課程代碼="">
    <Grouping RowIndex="21" startLevel="1"/>
</Subject>
<Subject Category="" Credit="3" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="團體活動時間 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="團體活動時間" 課程代碼="">
    <Grouping RowIndex="21" startLevel="1"/>
</Subject>
<Subject Category="" Credit="3" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="團體活動時間 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="團體活動時間" 課程代碼="">
    <Grouping RowIndex="21" startLevel="1"/>
</Subject>
<Subject Category="" Credit="3" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="團體活動時間 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="團體活動時間" 課程代碼="">
    <Grouping RowIndex="21" startLevel="1"/>
</Subject>
<Subject Category="" Credit="3" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="團體活動時間 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="團體活動時間" 課程代碼="">
    <Grouping RowIndex="21" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="彈性學習時間 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="彈性學習時間" 課程代碼="">
    <Grouping RowIndex="22" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="彈性學習時間 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="彈性學習時間" 課程代碼="">
    <Grouping RowIndex="22" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="彈性學習時間 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="彈性學習時間" 課程代碼="">
    <Grouping RowIndex="22" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="彈性學習時間 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="彈性學習時間" 課程代碼="">
    <Grouping RowIndex="22" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="彈性學習時間 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="彈性學習時間" 課程代碼="">
    <Grouping RowIndex="22" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="彈性學習時間 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="彈性學習時間" 課程代碼="">
    <Grouping RowIndex="22" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術領域" Entry="學業" GradeYear="1" Level="1" FullName="美術 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="美術" 課程代碼="">
    <Grouping RowIndex="22" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術領域" Entry="學業" GradeYear="1" Level="2" FullName="美術 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="美術" 課程代碼="">
    <Grouping RowIndex="22" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術領域" Entry="學業" GradeYear="1" Level="1" FullName="美術 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="美術" 課程代碼="">
    <Grouping RowIndex="22" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術領域" Entry="學業" GradeYear="1" Level="2" FullName="美術 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="美術" 課程代碼="">
    <Grouping RowIndex="22" startLevel=""/>
</Subject>
<Subject Category="" Credit="2" Domain="不分領域" Entry="專業科目" GradeYear="1" Level="1" FullName="機械製造 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="機械製造" 課程代碼="">
    <Grouping RowIndex="23" startLevel=""/>
</Subject>
<Subject Category="" Credit="2" Domain="不分領域" Entry="專業科目" GradeYear="1" Level="2" FullName="機械製造 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="機械製造" 課程代碼="">
    <Grouping RowIndex="23" startLevel=""/>
</Subject>
<Subject Category="" Credit="2" Domain="不分領域" Entry="專業科目" GradeYear="1" Level="1" FullName="機械製造 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="機械製造" 課程代碼="">
    <Grouping RowIndex="23" startLevel=""/>
</Subject>
<Subject Category="" Credit="2" Domain="不分領域" Entry="專業科目" GradeYear="1" Level="2" FullName="機械製造 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="機械製造" 課程代碼="">
    <Grouping RowIndex="23" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="1" FullName="機械基礎實習 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="機械基礎實習" 課程代碼="">
    <Grouping RowIndex="24" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="1" FullName="機械基礎實習 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="機械基礎實習" 課程代碼="">
    <Grouping RowIndex="24" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="2" FullName="基礎電學實習 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="基礎電學實習" 課程代碼="">
    <Grouping RowIndex="25" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="2" FullName="基礎電學實習 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="基礎電學實習" 課程代碼="">
    <Grouping RowIndex="25" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="1" FullName="機械製圖實習 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="機械製圖實習" 課程代碼="">
    <Grouping RowIndex="26" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="2" FullName="機械製圖實習 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="機械製圖實習" 課程代碼="">
    <Grouping RowIndex="26" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="1" FullName="機械製圖實習 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="機械製圖實習" 課程代碼="">
    <Grouping RowIndex="26" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="2" FullName="機械製圖實習 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="機械製圖實習" 課程代碼="">
    <Grouping RowIndex="26" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="自動化整合技能領域" Entry="實習科目" GradeYear="1" Level="1" FullName="氣油壓控制實習 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="氣油壓控制實習" 課程代碼="">
    <Grouping RowIndex="27" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="自動化整合技能領域" Entry="實習科目" GradeYear="1" Level="1" FullName="氣油壓控制實習 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="氣油壓控制實習" 課程代碼="">
    <Grouping RowIndex="27" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="1" FullName="現代文學導讀 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="現代文學導讀" 課程代碼="">
    <Grouping RowIndex="28" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="2" FullName="現代文學導讀 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="現代文學導讀" 課程代碼="">
    <Grouping RowIndex="28" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="2" Level="3" FullName="現代文學導讀 III" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="現代文學導讀" 課程代碼="">
    <Grouping RowIndex="28" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="2" Level="4" FullName="現代文學導讀 IV" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="現代文學導讀" 課程代碼="">
    <Grouping RowIndex="28" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="1" FullName="數學演練 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="數學演練" 課程代碼="">
    <Grouping RowIndex="29" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="2" FullName="數學演練 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="數學演練" 課程代碼="">
    <Grouping RowIndex="29" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="1" FullName="數學演練 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="數學演練" 課程代碼="">
    <Grouping RowIndex="29" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="2" FullName="數學演練 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="數學演練" 課程代碼="">
    <Grouping RowIndex="29" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="1" FullName="起點英文 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="起點英文" 課程代碼="">
    <Grouping RowIndex="30" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="2" FullName="起點英文 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="起點英文" 課程代碼="">
    <Grouping RowIndex="30" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="1" FullName="起點英文 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="起點英文" 課程代碼="">
    <Grouping RowIndex="30" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="2" FullName="起點英文 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="起點英文" 課程代碼="">
    <Grouping RowIndex="30" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="2" FullName="氣電控制實習 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="氣電控制實習" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="2" FullName="氣電控制實習 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="氣電控制實習" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="健康與體育領域" Entry="學業" GradeYear="1" Level="1" FullName="健康與護理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="健康與體育領域" Entry="學業" GradeYear="1" Level="2" FullName="健康與護理 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="0" Domain="健康與體育領域" Entry="學業" GradeYear="2" Level="3" FullName="健康與護理 III" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="0" Domain="健康與體育領域" Entry="學業" GradeYear="2" Level="4" FullName="健康與護理 IV" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="0" Domain="健康與體育領域" Entry="學業" GradeYear="3" Level="5" FullName="健康與護理 V" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="0" Domain="健康與體育領域" Entry="學業" GradeYear="3" Level="6" FullName="健康與護理 VI" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
</GraduationPlan>`;

const GPXML_Merge = `<GraduationPlan SchoolYear="109">
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="1" FullName="國語文 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="國語文" 課程代碼="">
    <Grouping RowIndex="1" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="2" FullName="國語文 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="國語文" 課程代碼="">
    <Grouping RowIndex="1" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="1" FullName="英語文 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="英語文" 課程代碼="">
    <Grouping RowIndex="2" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="語文" Entry="學業" GradeYear="1" Level="2" FullName="英語文 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="英語文" 課程代碼="">
    <Grouping RowIndex="2" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="數學" Entry="學業" GradeYear="1" Level="1" FullName="數學 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="數學" 課程代碼="">
    <Grouping RowIndex="3" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="數學" Entry="學業" GradeYear="1" Level="2" FullName="數學 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="數學" 課程代碼="">
    <Grouping RowIndex="3" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="歷史 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="4" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="歷史 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="4" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="社會" Entry="學業" GradeYear="2" Level="3" FullName="歷史 III" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="4" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="地理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="地理" 課程代碼="">
    <Grouping RowIndex="5" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="物理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="物理" 課程代碼="">
    <Grouping RowIndex="6" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="物理 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="物理" 課程代碼="">
    <Grouping RowIndex="6" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="生物 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="生物" 課程代碼="">
    <Grouping RowIndex="7" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="生物 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="生物" 課程代碼="">
    <Grouping RowIndex="7" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術" Entry="學業" GradeYear="1" Level="1" FullName="音樂 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="音樂" 課程代碼="">
    <Grouping RowIndex="8" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術" Entry="學業" GradeYear="1" Level="2" FullName="音樂 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="音樂" 課程代碼="">
    <Grouping RowIndex="8" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="綜合活動" Entry="學業" GradeYear="1" Level="1" FullName="生涯規劃 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="生涯規劃" 課程代碼="">
    <Grouping RowIndex="9" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="綜合活動" Entry="學業" GradeYear="1" Level="2" FullName="生涯規劃 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="生涯規劃" 課程代碼="">
    <Grouping RowIndex="9" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="1" FullName="資訊科技 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="資訊科技" 課程代碼="">
    <Grouping RowIndex="10" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="2" FullName="資訊科技 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="資訊科技" 課程代碼="">
    <Grouping RowIndex="10" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="健康與體育" Entry="學業" GradeYear="1" Level="1" FullName="體育 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="體育" 課程代碼="">
    <Grouping RowIndex="12" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="健康與體育" Entry="學業" GradeYear="1" Level="2" FullName="體育 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="體育" 課程代碼="">
    <Grouping RowIndex="12" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="全民國防教育" Entry="學業" GradeYear="1" Level="1" FullName="全民國防教育 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="全民國防教育" 課程代碼="">
    <Grouping RowIndex="13" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="全民國防教育" Entry="學業" GradeYear="1" Level="2" FullName="全民國防教育 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="全民國防教育" 課程代碼="">
    <Grouping RowIndex="13" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="1" FullName="公民與社會 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="公民與社會" 課程代碼="">
    <Grouping RowIndex="14" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="公民與社會 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="公民與社會" 課程代碼="">
    <Grouping RowIndex="14" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="化學 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="化學" 課程代碼="">
    <Grouping RowIndex="15" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="化學 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="化學" 課程代碼="">
    <Grouping RowIndex="15" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="特殊需求領域 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="特殊需求領域" 課程代碼="">
    <Grouping RowIndex="16" startLevel="1"/>
</Subject>
<Subject Category="" Credit="4" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="特殊需求領域 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="特殊需求領域" 課程代碼="">
    <Grouping RowIndex="16" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="歷史 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="歷史" 課程代碼="">
    <Grouping RowIndex="17" startLevel="2"/>
</Subject>
<Subject Category="" Credit="2" Domain="社會" Entry="學業" GradeYear="1" Level="2" FullName="地理 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="地理" 課程代碼="">
    <Grouping RowIndex="18" startLevel="2"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="1" FullName="地球科學 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="地球科學" 課程代碼="">
    <Grouping RowIndex="19" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="自然科學" Entry="學業" GradeYear="1" Level="2" FullName="地球科學 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="地球科學" 課程代碼="">
    <Grouping RowIndex="19" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="1" FullName="生活科技 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="生活科技" 課程代碼="">
    <Grouping RowIndex="20" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="科技" Entry="學業" GradeYear="1" Level="2" FullName="生活科技 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="生活科技" 課程代碼="">
    <Grouping RowIndex="20" startLevel="1"/>
</Subject>
<Subject Category="" Credit="3" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="團體活動時間 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="團體活動時間" 課程代碼="">
    <Grouping RowIndex="21" startLevel="1"/>
</Subject>
<Subject Category="" Credit="3" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="團體活動時間 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="團體活動時間" 課程代碼="">
    <Grouping RowIndex="21" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="1" FullName="彈性學習時間 I" Required="選修" RequiredBy="校訂" Semester="1" SubjectName="彈性學習時間" 課程代碼="">
    <Grouping RowIndex="22" startLevel="1"/>
</Subject>
<Subject Category="" Credit="2" Domain="不分" Entry="學業" GradeYear="1" Level="2" FullName="彈性學習時間 II" Required="選修" RequiredBy="校訂" Semester="2" SubjectName="彈性學習時間" 課程代碼="">
    <Grouping RowIndex="22" startLevel="1"/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術領域" Entry="學業" GradeYear="1" Level="1" FullName="美術 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="美術" 課程代碼="">
    <Grouping RowIndex="22" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="藝術領域" Entry="學業" GradeYear="1" Level="2" FullName="美術 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="美術" 課程代碼="">
    <Grouping RowIndex="22" startLevel=""/>
</Subject>
<Subject Category="" Credit="2" Domain="不分領域" Entry="專業科目" GradeYear="1" Level="1" FullName="機械製造 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="機械製造" 課程代碼="">
    <Grouping RowIndex="23" startLevel=""/>
</Subject>
<Subject Category="" Credit="2" Domain="不分領域" Entry="專業科目" GradeYear="1" Level="2" FullName="機械製造 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="機械製造" 課程代碼="">
    <Grouping RowIndex="23" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="1" FullName="機械基礎實習 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="機械基礎實習" 課程代碼="">
    <Grouping RowIndex="24" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="2" FullName="基礎電學實習 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="基礎電學實習" 課程代碼="">
    <Grouping RowIndex="25" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="1" FullName="機械製圖實習 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="機械製圖實習" 課程代碼="">
    <Grouping RowIndex="26" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="2" FullName="機械製圖實習 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="機械製圖實習" 課程代碼="">
    <Grouping RowIndex="26" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="自動化整合技能領域" Entry="實習科目" GradeYear="1" Level="1" FullName="氣油壓控制實習 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="氣油壓控制實習" 課程代碼="">
    <Grouping RowIndex="27" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="1" FullName="現代文學導讀 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="現代文學導讀" 課程代碼="">
    <Grouping RowIndex="28" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="2" FullName="現代文學導讀 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="現代文學導讀" 課程代碼="">
    <Grouping RowIndex="28" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="2" Level="3" FullName="現代文學導讀 III" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="現代文學導讀" 課程代碼="">
    <Grouping RowIndex="28" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="2" Level="4" FullName="現代文學導讀 IV" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="現代文學導讀" 課程代碼="">
    <Grouping RowIndex="28" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="1" FullName="數學演練 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="數學演練" 課程代碼="">
    <Grouping RowIndex="29" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="2" FullName="數學演練 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="數學演練" 課程代碼="">
    <Grouping RowIndex="29" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="1" FullName="起點英文 I" Required="必修" RequiredBy="校訂" Semester="1" SubjectName="起點英文" 課程代碼="">
    <Grouping RowIndex="30" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="不分領域" Entry="學業" GradeYear="1" Level="2" FullName="起點英文 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="起點英文" 課程代碼="">
    <Grouping RowIndex="30" startLevel=""/>
</Subject>
<Subject Category="" Credit="3" Domain="不分領域" Entry="實習科目" GradeYear="1" Level="2" FullName="氣電控制實習 II" Required="必修" RequiredBy="校訂" Semester="2" SubjectName="氣電控制實習" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="健康與體育領域" Entry="學業" GradeYear="1" Level="1" FullName="健康與護理 I" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="1" Domain="健康與體育領域" Entry="學業" GradeYear="1" Level="2" FullName="健康與護理 II" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="0" Domain="健康與體育領域" Entry="學業" GradeYear="2" Level="3" FullName="健康與護理 III" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="0" Domain="健康與體育領域" Entry="學業" GradeYear="2" Level="4" FullName="健康與護理 IV" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="0" Domain="健康與體育領域" Entry="學業" GradeYear="3" Level="5" FullName="健康與護理 V" Required="必修" RequiredBy="部訂" Semester="1" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
<Subject Category="" Credit="0" Domain="健康與體育領域" Entry="學業" GradeYear="3" Level="6" FullName="健康與護理 VI" Required="必修" RequiredBy="部訂" Semester="2" SubjectName="健康與護理" 課程代碼="">
    <Grouping RowIndex="31" startLevel=""/>
</Subject>
</GraduationPlan>`;