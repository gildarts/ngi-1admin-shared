import { Field } from "../common/code-field";
import { CourseCode } from "../common/course-code";
import { MappingTable } from "../common/mapping-table";

/** 套用課程代碼各欄位說明。 */
export async function applyDescription(codeList: CourseCode[], mappingTables: Map<Field, MappingTable>, factor: string) {

    for (const code of codeList) {
        for (const field of [Field.N03,
        Field.N04,
        Field.N05,
        Field.N06,
        Field.N07,
        // Field.N08, // 這個每學期不同，在新規格需另外處理。
        Field.N09,
        Field.N10]) {

            const map = mappingTables.get(field);

            if (!map) continue;

            code.setDescription(field, map, factor);
        }
    }
}