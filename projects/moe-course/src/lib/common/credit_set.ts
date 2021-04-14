
export type SemesterList = 1 | 2 | 3 | 4 | 5 | 6;

export interface Credit {
  /** 學分數 */
  val: number;
  /** 原始資料，0/無授課、Z/有授課，0學分、A ~ I / 1 ~ 9 學分對開、R ~ T / 10 ~ 12 學分*/
  origin?: string;
};

/**
 * 代表所有學期的學分數。
 */
export class CreditSet {

  private credits: Credit[] = [{ val: NaN }, { val: NaN }, { val: NaN }, { val: NaN }, { val: NaN }, { val: NaN }];

  constructor() {
  }

  [Symbol.iterator]() {
    return this.credits.values();
  }

  /** 設定指定學期的學分數。 */
  public set(semester: SemesterList, credit: number) {
    this.credits[semester - 1] = { val: credit, origin: credit + '' };
  }

  public setByGradeYear(gradeYear: number, semester: number, credit: number) {
    const map = new Map<string, number>([
      ['11', 0], ['12', 1],
      ['21', 2], ['22', 3],
      ['31', 4], ['32', 5],
    ]);
    this.credits[map.get(`${gradeYear}${semester}`)!] = { val: credit, origin: credit + '' };
  }

  /** 取得指定學期的學分數。 */
  public get(semester: SemesterList) {
    return this.credits[semester - 1]
  }

  /** 取得可用來比較的字串。 */
  public get unifiedKey() {
    // 所有的 NaN 都換成 0，因為科目代碼表上並沒有 NaN 狀態。
    // 為了一致都換成0來運算。
    return this.credits.map(v => isNaN(v.val) ? 0 : v.origin).join(':');
  }

  public toString(splitter: string = '') {
    return this.credits.map(v => isNaN(v.val) ? 0 : v.origin).join(splitter);
  }

  public clone() {
    const newone = new CreditSet();
    newone.credits = [...this.credits];
    return newone;
  }

  public static parse(credits: string) {
    const cs = new CreditSet();

    // 學分對照表，依課程計劃平臺的規範。
    const map = new Map<string, number>([
      ['0', 0],
      ['1', 1],
      ['2', 2],
      ['3', 3],
      ['4', 4],
      ['5', 5],
      ['6', 6],
      ['7', 7],
      ['8', 8],
      ['9', 9],
      ['A', 1],
      ['B', 2],
      ['C', 3],
      ['D', 4],
      ['E', 5],
      ['F', 6],
      ['G', 7],
      ['H', 8],
      ['I', 9],
      ['R', 10],
      ['S', 11],
      ['T', 12],
      ['Z', 0], // 有開課 0 學分。
    ]);

    const line = credits.toUpperCase();
    for (let i = 0; i <= 5; i++) {
      const credit = line[i];

      if(!credit) continue;

      if(map.has(credit)) {
        cs.credits[i] = { val: map.get(credit)!, origin: credit };
      }
    }

    return cs;
  }
}
