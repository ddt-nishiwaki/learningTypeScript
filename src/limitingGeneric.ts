/**
 * ジェネリックを設定した際に、型引数に制約をつけたい場合は
 * extendsキーワードを利用します
 * 
 *     <T extends 任意のクラス>
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/limitingGeneric.ts --target es5
 * 
 * 実行コマンド
 * 
 *     node dist/limitingGeneric.js
 * 
 * 期待値
 * 
 *     この三角形のサイズは25です
 */
namespace Learning.LimitingGeneric {
    export abstract class Figure {
        protected _type: string;
        constructor(
            protected width: number,
            protected height: number
        ) {}
        abstract getArea(): number;
        abstract get type(): string;
    }
    export class Triangle extends Figure {
        constructor(
            protected width: number,
            protected height: number
        ) {
            super(width,height);
            this._type = '三角形';
        }
        getArea(): number {
            return this.width * this.height / 2;
        }
        get type(): string {
            return this._type;
        }
    }
    /*
     * Figure型の実装に依存しているコードがあるため
     * 型引数をFigure型を継承したものに制限しています
     */
    export class FigureViewer<T extends Figure> {
        constructor(
            private figure: T
        ){}
        showAbout(): string {
            return `この${this.figure.type}のサイズは${this.figure.getArea()}です`
        }
    }
    export let triangle: Triangle = new Triangle(10,5);
    export let triangleViewer: FigureViewer<Triangle> = new FigureViewer(triangle);
}

console.log(
    Learning.LimitingGeneric.triangleViewer.showAbout()
);