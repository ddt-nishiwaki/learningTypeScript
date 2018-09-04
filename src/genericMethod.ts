/**
 * ジェネリックとよく似た概念にジェネリックメソッドがあります。
 * これもTypeScriptで利用可能です。
 * 
 *     関数名<型引数>(引数名: 型): 返値型 { ... }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/genericMethod.ts
 * 
 * 実行コマンド
 * 
 *     node dist/genericMethod.js
 * 
 * 期待値
 * 
 *     [ 10, 15, 30, 45, 60 ]
 *     [ '春', '夏', '秋', '冬' ]
 */
namespace Learning.GenericMethod {
    export class MyCollection {
        // 配列要素の型は実行時に決定されます
        static addAll<T>(data: T[], ...values: T[]): T[] {
            return data.concat(values);
        }
    }

    let numberArray: number[] = [10, 15, 30];
    let stringArray: string[] = ['春', '夏'];
    // メソッド実行時に明示的に型を指定する必要はありません。引数の型から推論されます
    export let resultNumArray = MyCollection.addAll(numberArray,45, 60);
    // 明示的に型を指定しても問題ありません
    export let resultStrArray = MyCollection.addAll<string>(stringArray,'秋', '冬');
}

console.log(Learning.GenericMethod.resultNumArray);
console.log(Learning.GenericMethod.resultStrArray);