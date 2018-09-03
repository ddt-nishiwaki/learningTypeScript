/**
 * Javascriptでは可変長引数をargumentオブジェクトで扱っていましたが、
 * これは配列のようなオブジェクトとなっていて配列ではないというものでした。
 * TypeScriptでは可変長引数を配列として扱います。
 * 構文は次の通り
 * 
 *     function(...変数名: 型[]): 返値型 {
 *         // 処理を記載
 *     }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/variableArgument.ts
 * 
 * 実行コマンド
 * 
 *     node dist/variableArgument.js
 * 
 * 期待値
 * 
 *     55
 */
function sumNumber(...values: number[]) {
    let result: number = 0;
    for(let value of values) {
       result += value;
    }
    return result;
}

// 引数はいくらでも設定可能
console.log(sumNumber(1,2,3,4,5,6,7,8,9,10));