/**
 * 通常の継承の場合、メソッドのオーバライドは「任意」ですが、
 * これを強制させることができます。javaなどでおなじみの抽象クラスを利用します。
 * 抽象メソッドは抽象クラスで宣言することができます。
 * 
 *     abstract class クラス名 {
 *         ... 割愛 ...
 *         abstract メソッド名(引数名:型): 返値型 { ... }
 *     }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/abstract.ts
 * 
 * 実行コマンド
 * 
 *     node dist/abstract.js
 * 
 * 期待値
 * 
 *     25
 */
namespace Learning.abs {
    // 抽象クラスとして宣言
    export abstract class Figure {
        constructor(
            protected width: number,
            protected height: number
        ) {}
        // 抽象メソッドとして宣言
        abstract getArea(): number;
    }

    export class Triangle extends Figure {
        getArea(): number {
            return this.width * this.height / 2;
        }
    }
}

// 親クラスの型として代入を試みる
let triangle:Learning.abs.Figure = new Learning.abs.Triangle(10,5);
// 抽象メソッドの実装を確認のため実行,出力を行う
console.log(triangle.getArea());