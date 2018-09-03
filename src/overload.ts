/**
 * 関数のオーバーロードはJavascriptではサポートしていませんが、
 * TypeScriptでは any型の引数をとる関数に対して
 * 特定の型だけを許容するようにシグニチャを指定し
 * 実装箇所ないで分岐処理を書いて実現します。
 * 
 * 実際のところunion型を指定するのと変わらないように感じますが、
 * 引数のパターンが多い場合に全てをunionで書くと可読性が下がります。
 * この構文を使えばある程度可読性を保って入られます。
 * 
 * function 関数名(引数名: 型): 返値;
 * function 関数名(引数名: 型): 返値;
 * function 関数名(引数名: any): 返値 {
 *     if(型判定式) {
 *         // 処理を記載
 *     } else if (型判定式) {
 *         // 処理を記載
 *     } else {
 *         ...
 *     } ...
 * }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/overload.ts
 * 
 * 実行確認コマンド
 * 
 *     node dist/overload.js
 * 
 * 期待値
 * 
 *     入力値は数値です
 *     入力値は真偽値です
 */
function showInputData(value: number): void;
function showInputData(value: boolean): void;
function showInputData(value: any): void {
    if('number' === typeof value) {
        console.log('入力値は数値です');
    } else {
        console.log('入力値は真偽値です');
    }
}

showInputData(10);
showInputData(true);