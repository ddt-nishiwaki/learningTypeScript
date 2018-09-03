/**
 * ECMAScript6ではclass構文が追加されていますが
 * TypeScriptでもclass構文の利用が可能です。
 * 構文のルールは長くなるため、コードにコメントで記載します。
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/class.ts
 * 
 * 実行コマンド
 * 
 *     node dist/class.js
 * 
 * 期待値
 * 
 *     Bobは男です。
 *     Bob
 *     男
 */
// クラス名→ class クラス名
class Person {
    // メンバの宣言→ 名前: 型;
    name: string;
    sex: string;

    // コンストラクタ→ constructor(名前:型, ... )
    // constructorは返値の型は指定しない
    // オーバーロードは可能
    constructor(name:string, sex:string) {
        this.name = name;
        this.sex = sex;
    }

    // 関数→ 関数名(引数名:型): 返値型 { ... }
    show() {
        return `${this.name}は${this.sex}です。`;
    }
}

let person = new Person('Bob', '男');
console.log(person.show());
console.log(person.name);
console.log(person.sex);