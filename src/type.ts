/**
 * TypeScriptの静的型付けを確認します。
 * 
 * 下記の型を指定できます。
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
 *     文字列データ
 */
const STRING_DATE: string = '文字列データ';
// 定数の初期化を確認のため出力します
console.log(STRING_DATE);