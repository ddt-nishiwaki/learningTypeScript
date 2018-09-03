/**
 * TypeScriptではenum型の定義が可能です。
 * 構文は下記となります。
 * 列挙子にはデフォルトで0からの連番が値として割り当てられます。
 * 
 *     emum 名前 { 列挙子, 列挙子, 列挙子, ... }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/array.ts
 * 
 * 実行コマンド
 * 
 *     node dist/array.js
 * 
 * 期待値
 * 
 *     0
 *     MALE
 */
enum Sex {
    MALE,
    FEMALE,
    UNKNOWN
}

// enumの型として代入可能か試みる
let sex : Sex = Sex.MALE;
// MALE = 1 であることを確認するため出力する
console.log(sex);
// 列挙子MALEへのアクセスは同じ列挙子で可能なのことを確認のため出力する
console.log(Sex[sex]);