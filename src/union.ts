/**
 * TypeScriptでは型について
 * 「複数の型のうちのどれか」という表現が可能です。
 * 
 *     let 変数名 : 型 | 型 | ... ;
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/union.ts
 * 
 * 実行コマンド
 * 
 *     node dist/union.js
 * 
 * 期待値
 * 
 *     string
 *     number
 *     boolean
 */
let union_data : String | boolean;
union_data = 'hoge';
union_data = false;

// 通常の配列宣言
// let nomal_array : type[] = [ value, value, ... ]
let union_array : (string | number)[] = ['hoge', 123];