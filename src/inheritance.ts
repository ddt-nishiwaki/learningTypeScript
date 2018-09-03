/**
 * クラスの継承の構文はjavaでもおなじみのextendsを使います。
 * 尚、今回より変数名の重複を避けるため名前空間を使用します。
 * 
 *     class 継承先クラス名 extends 継承元クラス名 { ... }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/inheritance.ts --target es5
 * 
 * 実行コマンド
 * 
 *     node dist/inheritance.js
 * 
 * 期待値
 * 
 *     Bobはテキパキ働きます
 */
namespace Learning.Inheritance {
    export class Person {
        // 継承先でも参照可能か確認のため、protectedで定義する
        constructor (
            protected name: string
        ) {
            this.name = name;
        }
        greet(): string {
            return `私の名前は${this.name}です`;
        }
    }
    export class BusinessPerson extends Person {
        work(): string {
            return `${this.name}はテキパキ働きます`;
        }
    }
}

namespace Learning.Inheritance.PlayGround {
    // Personを継承したBusinessPersonインスタンスを生成する
    export let bob:Learning.Inheritance.BusinessPerson = new Learning.Inheritance.BusinessPerson('Bob');
}

// 継承元プロパティを使った継承先のメソッドの動作確認を行う
console.log(
    Learning.Inheritance.PlayGround.bob.work()
);