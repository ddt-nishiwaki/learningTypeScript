/**
 * Javascriptの関数定義としては
 * 関数宣言だけでなく関数式による定義もあり、
 * TypeScriptでは下記の構文となります。
 * ※ 型名を指定しなくてもfunction型として認識されます。
 * 明示的に型を指定する場合, 単純に function とならないことに注意します。
 * 
 *     let 関数名: (引数名: 型) => 返値 = function (引数名: 型): 返値 {
 *         // 処理を記載
 *     }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/functionLiteral.ts
 * 
 * 実行コマンド
 * 
 *     node dist/functionLiteral.js 
 * 
 * 期待値
 * 
 *    Hello Bob! 
 * 
 */
let SayHello: (name: string) => string  = function(name: string): string {
    return `Hello ${name}!`;
}

// コンパイルされた関数を実行確認する
console.log(SayHello('Bob'));