import { Component, OnInit } from '@angular/core';
import { CourseCode, Field, ListCode, MappingTable } from 'projects/moe-course/src/public-api';
import { ApiResponse, CodeTables } from './example';

@Component({
    selector: 'app-node-test',
    templateUrl: './node-test.component.html',
    styleUrls: ['./node-test.component.scss']
})
export class NodeTestComponent implements OnInit {

    data: any;

    constructor() { }

    ngOnInit(): void {

        const argList = [
            { name: ListCode.SCH, field: Field.N03, keyName: '代碼', valueName: '代碼說明' },
            { name: ListCode.GRP, field: Field.N04, keyName: '代碼', valueName: '代碼說明', factorName: '適用課程類型' },
            { name: ListCode.DEP, field: Field.N05, keyName: '代碼', valueName: '代碼說明', factorName: '適用課程類型' },
            { name: ListCode.CLA, field: Field.N06, keyName: '代碼', valueName: '代碼說明', factorName: '適用課程類型' },
            { name: ListCode.CAT, field: Field.N07, keyName: '代碼', valueName: '代碼說明' },
            // 開課方式在新規格是每學期可以不同，需另外處理。
            // { name: ListCode.MOD, field: Field.N08, keyName: '代碼', valueName: '代碼說明' },
            { name: ListCode.ATT1, field: Field.N09, keyName: '代碼', valueName: '代碼說明' },
            { name: ListCode.FLD, field: Field.N10, keyName: '代碼', valueName: '代碼說明', factorName: '適用課程類型' },
        ]

        const mapraw: any = CodeTables.map(m => [m.name as string, m.content as any]);
        const mapDatas = new Map<string, any>(mapraw);

        const mapcoll = new Map<Field, MappingTable>();
        for (const arg of argList) {
            const mapdata = mapDatas.get(arg.name);
            const map = new MappingTable(arg.keyName, arg.valueName, mapdata, arg.factorName);

            mapcoll.set(arg.field, map);
        }

        this.data = mapcoll.get(Field.N04)?.getDescription('11');

    }

}