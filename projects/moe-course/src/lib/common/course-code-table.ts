import { SubjectKey } from './subject-key';
import { CreditSet } from './credit_set';
import { CourseCode } from './course-code';
import { CourseCodeRecord } from './course-code-record';
import { CourseCodeSpec } from './course-code-spec';

/** 代表課程代碼前十六碼相同的所有科目清單。 */
export class CourseCodeTable {

  private records: CourseCodeRecord[] = [];
  private recordMap = new Map<string, CourseCodeRecord>();

  constructor(codes: CourseCodeSpec[]) {
    for (const code of codes) {
      const { course_code, subject_name, credits } = code;

      const record = new CourseCodeRecord(new CourseCode(course_code),
        subject_name,
        CreditSet.parse(credits),
        code.exec_type,
        code.attr);

      this.records.push(record);
    }

    this.generateMap();
  }

  /** 取得所有課程代碼清單的參考。 */
  public getCodesRef() {
    return this.records.map(v => v.code);
  }

  /** 使用「Unified Key」取得代碼。 */
  public getCodeBySubjectKey(key: SubjectKey) {
    return this.recordMap.get(key.identify);
  }

  public [Symbol.iterator]() {
    return this.records.values();
  }

  public getCodes() {
    return [...this];
  }

  private generateMap() {
    this.recordMap.clear();

    for(const record of this) {
      // 科目名稱、校部訂、必選修。
      this.recordMap.set(record.getUnifiedSubject().getUnifiedKey(), record);
    }

  }
}
