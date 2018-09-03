/**
 * TypeScriptでは配列を宣言する際に型を指定します。
 * 構文は下記となります。
 * 
 *     let 変数名: { [ key: キーの型 ] : 値の型 } = { key : value, ... }
 *     ※インデックスシグニチャという記法。 key の部分は仮名なので実際は何を指定しても動作する
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
 *     20
 */
 let hash_data: { [key: string] : string; } = {
     'name':'Bob',
     'age':'20',
 };

 // nameプロパティの設定を確認のため出力する
 console.log(hash_data.name);
 // ageプロパティの設定を確認のため出力する
 console.log(hash_data['age']);