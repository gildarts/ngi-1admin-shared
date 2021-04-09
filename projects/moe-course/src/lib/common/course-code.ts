import { CodeField, CodeFields } from './code-field';
import { Field } from './code-field';
import { MappingTable } from './mapping-table';

/** 代表「全國高級中等學校 課程計畫平台」的課程代碼，支援 for...of 取得所有欄位值。 */
export class CourseCode {

  private record: CodeFields;

  public constructor(
    private code: string,
    public readonly attr?: string) {

    const Pattern = /^([\d\w]{3})([\d\w]{6})([\d\w]{1})([\d\w]{2})([\d\w]{3})([\d\w]{1})([\d\w]{1})([\d\w]{1})([\d\w]{1})([\d\w]{2})([\d\w]{2})$/igm;
    this.record = [];
    const fields = Pattern.exec(code);

    if (!fields) { throw new Error(`代碼規格不合：${code}`); }

    for (const name of Object.getOwnPropertyNames(fields)) {
      const idx = Number.parseInt(name)

      if (isNaN(idx)) continue;
      if (idx === 0) continue; // 第一個 full match 不要。

      this.record.push({ value: fields[idx], description: '' });
    }

    if(attr) {
      const AttrPattern = /^([\d\w]{1})([\d\w]{1})([\d\w]{2})$/igm;
      const attrs = AttrPattern.exec(attr);

      if (!attrs) { throw new Error(`Attr 規格不合：${attr}`); }

      this.record[(7-1)] = { value: attrs[1], description: '' };
      this.record[(9-1)] = { value: attrs[2], description: '' };
      this.record[(10-1)] = { value: attrs[3], description: '' };
    }
    
  }

  [Symbol.iterator](): IterableIterator<CodeField> {
    return this.record.values();
  }

  /** 取得代碼值。 */
  public getCode(field: Field): string {
    return this.record[+field].value;
  }

  /** 設定指定欄立的代碼資料。 */
  public setCode(field: Field, code: CodeField) {
    this.record[+field] = code;
  }

  /** 取得代碼中文說明。 */
  public getDescription(field: Field): string {
    return this.record[+field].description;
  }

  /** 設定代碼中文說明。 */
  public setDescription(field: Field, map: MappingTable, factor?: string): void {
    this.record[+field].description = map.getDescription(this.getCode(field), factor);
  }

  /** 取得原始的完整課程代碼，在新規格不會更改。 */
  public getPermanentlyCode() {
    return this.code;
  }

  /** 取得合併「課程屬性」之後的課程代碼。 */
  public getMergedCode() {
    return this.record.map(v => v.value).join('');
  }
}

