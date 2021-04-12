import { Field } from "./code-field";
import { CourseCode } from "./course-code";

/** 班群代碼表。 */
export class GroupName {

    private map = new Map<string, string>();

    constructor(gnc: GroupNameChart) {
        const groups: 班群資料[] = new Array<班群資料>().concat(gnc.班群資料 || [])

        for(const group of groups) {
            const key = `${group.課程類型}:${group.群別代碼}:${group.科別代碼}:${group.班群}`;
            this.map.set(key, group.班群名稱);
        }

        this.map.set('0', '不分班群');
        this.map.set('1', '建教合作班-輪調式');
        this.map.set('2', '建教合作班-階梯式');
        this.map.set('3', '建教合作班-實習式');
        this.map.set('4', '建教合作班-其他式');
    }

    /** 寫入班群中文名稱。 */
    public applyDescription(cc: CourseCode) {
        // 先假設是自定班群，所以產生一個唯一識別 Key。
        const key = `${cc.getCode(Field.N03)}:${cc.getCode(Field.N04)}:${cc.getCode(Field.N05)}:${cc.getCode(Field.N06)}`;

        let cname = this.map.get(key);

        // 如果查不到，就只使用預設(0,1,2,3,4 預設班群)的代碼去查。
        if(cname == '' || cname == undefined) {
            cname = this.map.get(cc.getCode(Field.N06)) + '';
        }

        cc.setDescriptionDirect(Field.N06, cname);
    }
}

/** 班群代碼表 API Response Data。 */
export interface GroupNameChart {
    實施學年度: number;
    MD5:   string;
    班群資料:  班群資料[];
}

export interface 班群資料 {
    適用入學學年度: number;
    課程類型:    string;
    群別代碼:    string;
    科別代碼:    string;
    班群:      string;
    班群名稱:    string;
}
