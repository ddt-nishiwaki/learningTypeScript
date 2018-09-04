/**
 * 色々なシグネチャやリテラルを型として扱えるTypeScriptですが、
 * thisを型として利用することもできます。
 * 利用シーンとしてはメソッドチェーンを実現する際に自分自身を返すといったものが挙げられます。
 * この場合thisに割り当てられる型はそのインスタンス自身のクラスになります。
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/polymorphicThisType.ts --target es5
 * 
 * 実行コマンド
 * 
 *     node dist/polymorphicThisType.js
 * 
 * 期待値
 * 
 *     5
 */
namespace Learning.PolymorphicThisType {
    export class MyClass {
        constructor(
            protected _value: number
        ) {}
        // 自身の値を確認するためのゲッターです
        get value(): number {
            return this._value;
        }
        // 自身の値を加算して、自分自身を返します
        add(value: number): this {
            this._value += value;
            return this;
        }
    }
    /*
     * 継承を行なっていても、返値の型が this なので
     * インスタンス自身の型が返値の型として適用されます
     */
    export class MyClassEX extends MyClass {
        // 自身の値を減産して、自分自身を返します
        minus(value: number): this {
            this._value -= value;
            return this;
        }
    }
    export let myClass: MyClassEX = new Learning.PolymorphicThisType.MyClassEX(0);
}

console.log(
    Learning.PolymorphicThisType.myClass
        .add(10)
        .minus(5) // 返却されているのは MyClassEX なので minus() が利用できる
        .value
)
