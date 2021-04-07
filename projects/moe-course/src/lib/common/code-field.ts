
/** 代表課程代碼中某區段代碼的文字與相對應的中文名稱。 */
export type CodeField = { value: string, description: string };

/** 代表一整組的課程代碼資料。 */
export class CodeFields extends Array<CodeField> {
}

/** 課程代碼欄位對照。 */
export enum Field {
    /** 適用入學年度(3) */
    N01 = 0,
    /** 校代碼(6) */
    N02,
    /** 課程類型(1) */
    N03,
    /** 群別代碼(2) */
    N04,
    /** 科別代碼(3) */
    N05,
    /** 班群(1) */
    N06,
    /** 課程類別(1) */
    N07,
    /** 開課方式(1) */
    N08,
    /** 科目屬性(1) */
    N09,
    /** 領域名稱(2) */
    N10,
    /** 科目名稱代碼(2) */
    N11,
}