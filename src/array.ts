/**
 * TypeScriptでは配列を宣言する際に型を指定できます
 * 構文は下記となります。
 * 
 *     let array: 型[] = [value, value, ...];
 *         or
 *     let array: Array<型> = [value, value, ...];
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
 *     40
 */

 // 入れ子の配列を宣言する場合
 let arrayData: Array<Array<number>> = [
     [10,20],
     [30,40],
     [50,60]
];
console.log(arrayData[1][1]);
