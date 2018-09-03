/**
 * TypeScriptではタプル型の定義が可能です。
 * タプル型とは複数の型の値の集合です。
 * しかし、実態はJavascriptの配列なので
 * pop()やpush()を実行可能で、この場合定義した型の順番と
 * タプルの要素の型が一致しなくなるといったことが起こるので
 * 利用は非推奨です。
 * 
 *     emum 名前 { 定数 = 任意の値, ... }
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
 *     string
 *     number
 *     boolean
 */
let data : [string, number, boolean] = ['文字列', 10.12345, true];

// 一つ目の要素の型を確認のため出力する
console.log(typeof data[0]);
// 二つ目の要素の型を確認のため出力する
console.log(typeof data[1]);
// 三つ目の要素の型を確認のため出力する
console.log(typeof data[2]);