import { Component, OnInit } from '@angular/core';
import { CourseCode } from 'dist/moe-course/public-api';
import { CourseCodeSpec } from 'projects/moe-course/src/lib/common/course-code-spec';
import { applyDescription, parseMappings } from 'projects/moe-course/src/lib/node/apply-description';
import { CourseCodeRecord, CourseCodeTable, Field, SubjectKey } from 'projects/moe-course/src/public-api';
import { ApiResponse } from './api-response';
import { CodeTables } from './code-tables';
@Component({
    selector: 'app-node-test',
    templateUrl: './node-test.component.html',
    styleUrls: ['./node-test.component.scss']
})
export class NodeTestComponent implements OnInit {

    data?: any[] = [];

    constructor() { }

    ngOnInit(): void {
        
        const ccTableList:CourseCodeTable [] = [];

        const charts = parseMappings(CodeTables);

        for(const ccFile of ApiResponse) {
            const factor = ccFile.課程類型;
            const ccSpecs: CourseCodeSpec[] = [];

            for (const ccData of ccFile.課程資料) {
                ccSpecs.push({
                    course_code: ccData.課程代碼,
                    credits: ccData.授課學期學分節數,
                    subject_name: ccData.科目名稱,
                    exec_type: ccData.授課學期開課方式,
                    attr: ccData.課程屬性
                });
            }

            const ccTable = new CourseCodeTable(ccSpecs, factor);

            applyDescription(ccTable.getCodesRef(), charts, factor);

            ccTableList.push(ccTable);
        }

        this.data?.push(ccTableList.length);
        for(const cct of ccTableList) {
            this.data?.push(cct.getCodes().length);
        }
        for(const cct of ccTableList) {
            for(const cc of cct) {
                this.data?.push(`${cc.removeRequired ? '刪除:' + cc.code.getFullCode(): ''}${cc.subjectName}`);
            }
        }
    }

}