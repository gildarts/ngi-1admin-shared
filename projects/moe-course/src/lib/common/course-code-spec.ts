
/** 課程代碼資料欄位。 */
export interface CourseCodeSpec {
    /** 課程代碼 */
    course_code: string;
    /** 科目名稱。 */
    subject_name: string;
    /** 學分數/節數。 */
    credits: string;
    /** 授課學期開課方式。 */
    exec_type?: string;
    /** 課程屬性。 */
    attr?: string;
  }