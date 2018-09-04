/**
 * TypeScriptではinterface機能がサポートされています。
 * Javaと同じで複数のインターフェースを実装可能です。
 * 
 *     宣言
 *         interface インターフェース名 {
 *             メソッド名(引数名:型): 返値型;
 *         }
 *     実装
 *         class クラス名 implements インターフェース名 {
 *             // 実装を行う
 *         }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/interface.ts
 * 
 * 実行コマンド
 * 
 *     node dist/interface.js
 * 
 * 期待値
 * 
 *     25
 *     this is triangle
 */
namespace Learning.interface {
    // 継承と実装を組み合わせたコードを実現したいので
    // メンバの設定を抽象クラスに記述します。
    export abstract class FigureBase {
        constructor(
            protected width: number,
            protected height: number
        ){}
    }
    // getAreaメソッドのインターフェースを定義します
    export interface Figure {
        getArea(): number;
    }
    // 自身の説明を出力するためのインターフェースを定義します。
    export interface DescriptionMessage {
        getDescriptionMessage(description:string): string;
    }

    /*
     * 継承と実装の組み合わせを確認します
     * interfaceは複数実装できることを確認します
     */
    export class Triangle extends FigureBase implements Figure, DescriptionMessage {
        // Figureインターフェースのメソッド、実装しないとコンパイルエラー
        getArea(): number {
            return this.width * this.height / 2;
        }
        // DescriptionMessageインターフェースのメソッド、実装しないとコンパイルエラー
        getDescriptionMessage(): string {
            return 'this is triangle';
        }
    }
}

// interfaceを実装したクラスのインスタンス作成を試みます。
namespace Learning.interface.playground {
    export let triangle = new Learning.interface.Triangle(10,5);
}

// Figureインターフェースのメソッドを確認のため実行します。
console.log(
    Learning.interface.playground.triangle.getArea()
)
// DescriptionMessageインターフェースのメソッドを確認のため実行します。
console.log(
    Learning.interface.playground.triangle.getDescriptionMessage()
)