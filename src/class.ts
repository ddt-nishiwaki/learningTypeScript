/**
 * ECMAScript6ではclass構文が追加されていますが
 * TypeScriptでもclass構文の利用が可能です。
 * 構文のルールは長くなるため、コードにコメントで記載します。
 * アクセス修飾子の利用も可能です。利用可能なアクセス修飾子は次の通りです。
 * 
 *     public        クラス外からアクセス可能(コンストラクタの引数以外は省略可)
 *     protected     同じクラスか派生クラスからのみアクセス可能
 *     private       同じクラスからのみアクセス可能
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
 *     プロパティへのアクセスを制限したため
 *     コンパイルエラーとなる
 */
// クラス名→ class クラス名
class Person {
    // メンバの宣言→ 名前: 型;
    /*
    private name: string;
    private sex: string;
    */
    // コンストラクタ→ constructor(名前:型, ... )
    // constructorは返値の型は指定しない
    // オーバーロードは可能
    /*
    constructor(name:string, sex:string) {
        this.name = name;
        this.sex = sex;
    }
    */
    // メンバ変数宣言とコンストラクタの記述は合わせて
    // 省略した記述か可能
    // 引数にアクセス修飾子をつけることでメンバ変数として扱われる
    // この場合publicでもアクセス修飾子の省略は不可
    constructor(
        private name: string,
        private sex: string
    ) {
        this.name = name;
        this.sex = sex;
    }

    // 関数→ 関数名(引数名:型): 返値型 { ... }
    // publicは省略可能
    show() {
        return `${this.name}は${this.sex}です。`;
    }
}

let person = new Person('Bob', '男');
console.log(person.show());
// コンパイルエラーになるため一旦コメントアウト
// console.log(person.name);
// console.log(person.sex);