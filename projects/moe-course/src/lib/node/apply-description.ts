import { Field } from "../common/code-field";
import { CourseCode } from "../common/course-code";
import { ListCode } from "../common/list-code";
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

/** 載入代碼對照表。 */
export function loadMapCollection(codeTableRaw: { name: string, content: any }[]) {

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

    const mapraw: any = codeTableRaw.map(m => [m.name as string, m.content as any]);
    const mapDatas = new Map<string, any>(mapraw);

    const mapcoll = new Map<Field, MappingTable>();
    for (const arg of argList) {
        const mapdata = mapDatas.get(arg.name);
        const map = new MappingTable(arg.keyName, arg.valueName, mapdata, arg.factorName);

        mapcoll.set(arg.field, map);
    }

    return mapcoll;
}