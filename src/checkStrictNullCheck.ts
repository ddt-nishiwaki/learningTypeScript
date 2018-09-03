/**
 * TypeScriptはデフォルトではどの型でも undefined,nullの代入を許容します。
 * バグの原因にもなりやすいのでTypeScriptの設定で許容しないようにできます。
 * この設定で null, undefined を設定したい場合は明示的に型を指定します。
 * 
 * コンパイルコマンド
 * 
 *     undefined, null 許容する場合 
 *         tsc --outDir dist src/checkStrictNullCheck.ts 
 * 
 *     undefined, null を許容しない場合
 *         tsc --outDir dist src/checkStrictNullCheck.ts  --strictNullChecks
 * 
 * 実行コマンド
 * 
 *     node dist/checkStrictNullCheck.js 
 * 
 * 期待値
 * 
 *     undefined, null 許容する場合 
 *         undefined
 *         null
 * 
 *     undefined, null を許容しない場合
 *         undefined
 *         null
 */
// string型の変数に undefinedの代入を試みる
let undefined_data: string | undefined = undefined;
// string型の変数に nullの代入を試みる
let null_data: string | null = null;

// undefinedが代入されていることを確認するため出力する
console.log(undefined_data);
// nullが代入されていることを確認するため出力する
console.log(null_data);