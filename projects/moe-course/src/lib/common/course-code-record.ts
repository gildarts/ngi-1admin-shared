import { ComparableSubject, UnifiedSubject } from './unified-subject';
import { CreditSet } from './credit_set';
import { CourseCode } from './course-code';
import { Field } from './code-field';
import { CourseTypeMap } from './course-type-map';

/** 代表「全國高級中等學校 課程計畫平台」的課程代碼記錄。 */
export class CourseCodeRecord implements ComparableSubject {

  constructor(
    /** 課程代碼。 */
    public code: CourseCode,
    /** 科目名稱。 */
    public readonly subjectName: string,
    /** 學分數。 */
    public credits: CreditSet,
    /** 授課學期開課方式(2021 新規格)。 */
    public execTypes?: string,
    /** 課程屬性(2021 新規格)。 */
    public attr?: string,
  ) { }

  /** 是否需要刪除此科目。 */
  public get removeRequired() {
    return this.subjectName == '' && this.execTypes == '' && this.attr == '';
  }

  /** 取得一致化的科目資料，用來進行通用比對。 */
  public getUnifiedSubject() {
    const us = new UnifiedSubject(this);

    const n07 = this.code.getCode(Field.N07);
    if ([''].indexOf(n07) >= 0) {
      console.log(`有科目超出規格N07：${n07}(${this.code.getPermanentlyCode()})`);
    }

    const { required, requiredBy } = CourseTypeMap.get(n07)!;
    us.subjectName = this.subjectName;
    us.credits = this.credits.clone();
    us.required = required;
    us.requiredBy = requiredBy;
    us.domain = this.code.getDescription(Field.N10);

    if (['2', '3'].indexOf(this.code.getCode(Field.N09)) >= 0) { // 專業科目、實習科目
      us.entry = this.code.getDescription(Field.N09);
    } else {
      us.entry = '學業';
    }

    return us;
  }
}

