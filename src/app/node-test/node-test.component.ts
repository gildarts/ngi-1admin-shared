import { Component, OnInit } from '@angular/core';
import { parseMappings } from 'projects/moe-course/src/lib/node/apply-description';
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

        const mapcoll = parseMappings(CodeTables);
        this.data = mapcoll.get(Field.N09)?.getDescription('B');

    }

}