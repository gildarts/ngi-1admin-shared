import { Component, OnInit } from '@angular/core';
import { CourseCodeSpec } from 'projects/moe-course/src/lib/common/course-code-spec';
import { applyDescription, parseMappings } from 'projects/moe-course/src/lib/node/helper-functions';
import { CourseCodeTable, Field } from 'projects/moe-course/src/public-api';
import { ApiResponse } from './api-response';
import { CodeTables } from './code-tables';
@Component({
    selector: 'app-node-test',
    templateUrl: './node-test.component.html',
    styleUrls: ['./node-test.component.scss']
})
export class NodeTestComponent implements OnInit {
    data: {
        subject: string,
        course_type: string,
        big_group: string,
        dept: string,
        class_group: string,
        cat: string,
        att1: string,
        domain: string,    
        permancely: string,
        dynamicely: string,
        remove: string,
    }[] = [];

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

        for(const cct of ccTableList) {
            for(const cc of cct) {

                const ccobj: any = {
                    subject: cc.subjectName,
                    course_type: cc.code.getDescription(Field.N03),
                    big_group: cc.code.getDescription(Field.N04),
                    dept: cc.code.getDescription(Field.N05),
                    class_group: cc.code.getDescription(Field.N06),
                    cat: cc.code.getDescription(Field.N07),
                    att1: cc.code.getDescription(Field.N09),
                    domain: cc.code.getDescription(Field.N10),
                    permancely: cc.code.getPermanentlyCode(),
                    dynamicely: cc.code.getMergedCode(),
                    remove: cc.removeRequired,
                };

                if(cc.code.getPermanentlyCode() != cc.code.getMergedCode()) {
                    ccobj.status = '不同!!!'
                }

                this.data!.push(ccobj);
            }
        }
    }

}