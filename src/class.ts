/**
 * ゲッター,セッターの使い方についてはECMASCript5で導入されていて
 * TypeScriptでもこれを利用できます。
 * 
 *     private プライベート変数名;
 *     get ゲッター名():返値型 { return this.プライベート変数名 }
 *     set セッター名(引数名:型) { this.プライベート変数名 = 引数名 }
 * 
 * コンパイラの変換はデフォルトでECMAScript3に変換しますが、
 * ゲッター、セッターはECMAScript5の機能を使うため、コンパイラにもECMAScript5への
 * 変換であることを次のオプションで伝えます。
 * 
 *     --target es5
 * 
 * ゲッター,セッターを呼び出す際に()はいりません。
 * プロパティにアクセスするように記述できます。
 * 
 *     obj.ゲッター名
 *     obj.セッター名 = 値
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/class.ts --target es5
 * 
 * 実行コマンド
 * 
 *     node dist/class.js
 * 
 * 期待値
 * 
 *     Bob
 *     John
 *     Johnは男です。
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

    get myName(): string {
        return this.name;
    }
    set changeName(newName:string) {
        this.name = newName;
    }
}

let person = new Person('Bob', '男');
// ゲッター,セッターによるプライベートメンバへのアクセス
console.log(person.myName);
person.changeName = 'John'
console.log(person.myName);
console.log(person.show());