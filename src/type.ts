/**
 * TypeScriptの静的型付けを確認します。
 * 
 * 下記の型を指定できますが
 * 通常のJavascriptと同様に任意の型を代入できる変数宣言も可能です。
 * 任意の型代入には any型 を使用します。
 * 以降はどんな型のデータ代入も受け付けます
 * 
 * number: 数値型(整数/浮動小数店を含む)
 * string: 文字列型
 * boolean: 真偽値(true/false)
 * symbol: シンボル型
 * 
 * コンパイルコマンド
 *     tsc --outDir dist src/type.ts
 * 実行コマンド
 *     node dist/type.js
 * 期待値
 *     10.5
 */
const STRING_DATA: string = '文字列データ';
const NUMBER_DATA: number = 10.5;

// 数値型に宣言した型への代入ができないことを確認します
let number_data: any = STRING_DATA;
// string型を格納した変数にnumber型のデータ代入を試みます
number_data = NUMBER_DATA;
// 代入確認のため出力します
console.log(number_data);