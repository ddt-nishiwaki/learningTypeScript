/**
 * 親クラスのメソッドはオーバーライドすることができます。
 * 親クラスにはsuperでアクセス可能です。
 * コンストラクタも同様です。
 * 
 *     constructor(引数名:型, ... ) {
 *         super(引数、... );
 *         // その他の初期化処理
 *     }
 * 
 *     親クラスのメソッド名(引数:型): 返値型 {
 *         super.親クラスのメソッド名(引数);
 *         // その他の処理
 *     }
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
 *     私の名前はBobです ポジションは主任です
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
        // コンストラクタをオーバーライドします
        constructor(
            protected name: string,
            protected clazz: string
        ) {
            // super()は必須
            super(name);
            this.clazz = clazz;
        }
        // greetメソッドをオーバライドしています
        greet(): string {
            return `${super.greet()} ポジションは${this.clazz}です`;
        }
        work(): string {
            return `${this.name}はテキパキ働きます`;
        }
    }
}

namespace Learning.Inheritance.PlayGround {
    // Personを継承したBusinessPersonインスタンスを生成する
    export let bob:Learning.Inheritance.BusinessPerson = new Learning.Inheritance.BusinessPerson('Bob','主任');
}

// オーバライドしたコンストラクタ、メソッドの確認のため実行、出力を行う
console.log(
    Learning.Inheritance.PlayGround.bob.greet()
);