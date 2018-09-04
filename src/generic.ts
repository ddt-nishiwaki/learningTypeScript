/**
 * JavaなどでおなじみのジェネリックをTypeScriptでも利用可能です。
 * 
 *     Array<型>
 *     class クラス名<型>
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/generic.ts
 * 
 * 実行コマンド
 * 
 *     node dist/generic.js
 * 
 * 期待値
 * 
 *     ジェネリック
 *     10
 *     2018-09-03T00:25:00.000Z
 */
namespace Learning.Generic {
    export class MyGenerics<T> {
        value: T;
        getValue(): T {
            return this.value;
        }
    }
    // 一つのクラス定義で複数の型に対応できることを確認するためstring,number,date型でそれぞれnewします
    export let stringGenerics = new MyGenerics<string>();
    export let numberGenerics = new MyGenerics<number>();
    export let dateGenerics = new MyGenerics<Date>();
}

// それぞれの型に対する値の代入を試みます
Learning.Generic.stringGenerics.value = 'ジェネリック';
Learning.Generic.numberGenerics.value = 10;
Learning.Generic.dateGenerics.value = new Date('September 3, 2018 09:25:00').toL;

// 代入が正しく行われたか確認するために、プロパティを出力します
console.log(
    Learning.Generic.stringGenerics.getValue()
);
console.log(
    Learning.Generic.numberGenerics.getValue()
);
console.log(
    Learning.Generic.dateGenerics.getValue()
);
