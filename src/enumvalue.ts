/**
 * TypeScriptではenum型の定義が可能です。
 * 列挙子に任意の値を割り振ることも可能です。
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
 *     Bob
 */
enum Name {
    BOB = 'Bob',
    SHERRY = 'Sherry',
    RAMP = 'Ramp'
}
// enumの型として代入可能か試みる
let user : Name = Name.BOB;
// デフォルトの値(0)ではなく、任意の値が割り振られていることを確認のため出力する
console.log(user);