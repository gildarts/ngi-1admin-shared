import { CodeField, Field } from './code-field';

export type MapCollection = Map<Field, MappingTable>;

/** 代碼對照表。 */
export class MappingTable {

  private map = new Map<string, string>();

  constructor(keyName: string, valueName: string, data: any, factorName?: string) {

    for (const code of data) {
      this.map.set(code[keyName], code[valueName]);
    }
  }

  public getDescription(code: string) {
    return this.map.get(code) ?? '';
  }

  public addCode(field: CodeField) {
    this.map.set(field.value, field.description);
  }
}
