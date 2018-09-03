/**
 * 特定の型に対して任意の型エイリアスを設定可能です。
 * あくまでエイリアスなので実際の型定義ではないことに注意します。
 * ※エラーメッセージなどで別名の参照は不可
 * 
 *     type エイリアス名 = 型
 *     type エイリアス名 = 型 | 型 ... ;
 *     type エイリアス名 = [ 型, 型, 型 ... ];
 *     etc ...
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/alias.ts
 * 
 * 実行コマンド
 * 
 *     node dist/alias.js
 * 
 * 期待値
 * 
 *     文字列
 *     10.12345
 *     true
 */
type MyTuple = [string, number, boolean];

// 定義した型名でタプルの代入を試みる
let myTupleData : MyTuple = ['文字列', 10.12345, true];

// 一つ目の要素を確認のため出力する
console.log(myTupleData[0]);
// 二つ目の要素を確認のため出力する
console.log(myTupleData[1]);
// 三つ目の要素を確認のため出力する
console.log(myTupleData[2]);
