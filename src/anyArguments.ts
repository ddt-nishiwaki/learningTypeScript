/**
 * TypeScriptでは型を指定するため
 * 通常のJavascriptのように単純に引数を省略するとコンパイルエラーになります。
 * 引数を任意にしたい場合には、引数名設定箇所に ? をつけます。
 * 
 * function 関数名(引数名?: 型): 返値 {
 *     // 処理を記載する
 * }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/anyArguments.ts
 * 
 * 実行コマンド
 * 
 *     node dist/anyArguments.js
 * 
 * 期待値
 * 
 *     引数が見つかりません
 */
function showMessage(message?: string): string {
    let returnMessage : string;
    // 引数がある場合の処理を行う
    if(message) {
        returnMessage = message;
    // 引数がない場合の処理を行う
    } else {
        returnMessage = '引数が見つかりません';
    }
    return returnMessage;
}

// 引数を任意にしてあるので、引数がない場合の処理が実行されることを確認する
console.log(showMessage());