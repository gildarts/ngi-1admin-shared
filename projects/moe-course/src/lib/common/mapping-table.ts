import { CodeField, Field } from './code-field';

export type MapCollection = Map<Field, MappingTable>;

/** 代碼對照表。 */
export class MappingTable {

  private map = new Map<string, {text: string, factors: string}[]>();

  /**
   * 
   * @param keyName 
   * @param valueName 
   * @param data 
   * @param factorName 適用課程類型。
   */
  constructor(keyName: string, valueName: string, data: any, factorName?: string) {

    for (const code of data) {
      let factors = '';
      if(factorName) {
        factors = (code[factorName] as string).toUpperCase();
      }

      if(!this.map.has(code[keyName])) {
        this.map.set(code[keyName], []);
      }

      this.map.get(code[keyName])!.push({ text: code[valueName], factors });
    }
  }

  public getDescription(code: string, factors?: string) {
    const cd = this.map.get(code) ?? [{ text: '', factors: '' }];

    if(!factors) { // 如果沒有指定 factors 就直接用第一筆資料。
      return cd[0].text;
    }

    for(const code of cd) {
      if(code.factors.indexOf(factors.toUpperCase()) >= 0) {
        return code.text;
      }
    }

    return cd[0].text; // 如果都沒找到就回傳第一個(最接近)的代碼。
  }

  /**
   * 
   * @param field 
   * @param factors 適用課程類型。
   */
  public addCode(field: CodeField, factors: string = '') {
    if(!this.map.has(field.value)) {
      this.map.set(field.value, []);
    }

    this.map.get(field.value)!.push({text: field.description, factors: factors.toUpperCase()});
  }
}
