/**
 * TypeScriptで関数を宣言する場合、
 * 引数の型、返値の型は次のように指定します。
 * 
 *     function 関数名(引数名: 型, ... ): 返値 {
 *         // 処理を記載
 *     }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/function.ts
 * 
 * 実行コマンド
 * 
 *     node dist/function.js
 * 
 * 期待値
 * 
 *    25 
 * 
 */
function greet(name: string): string {
    return `Hello ${name}!`;
}

// コンパイルされた関数を実行確認する
console.log(greet('Bob'));