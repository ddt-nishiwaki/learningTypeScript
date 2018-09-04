/**
 * TypeScriptでは
 * クラスを型として扱う場合に明示的にextendsしたり
 * インターフェースをimplementsしなくとも、
 * 同じシグニチャを持っていれば互換性があると判定します
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/structuralSubtyping.ts
 * 
 * 期待値
 * 
 *     コンパイルができること
 */
namespace Learning {
    export namespace StructuralSubtyping {
        export class Figure {
            constructor(
                public width: number,
                public height: number
            ){
                this.width = width;
                this.height = height;
            }
            getArea(): number {
                return this.width * this.height;
            }
        }
        export class Triangle {
            constructor(
                public width: number,
                public height: number
            ){
                this.width = width;
                this.height = height;
            }
            getArea(): number {
                return this.width * this.height / 2;
            }
            getDescriptionMessage(): string {
                return 'this is triangle';
            }
        }
    }
    export namespace Playground {
        // 同じシグニチャを持っているオブジェクトなら「互換性がある」型として認識されます
        let triangle: Learning.StructuralSubtyping.Figure = new Learning.StructuralSubtyping.Triangle(10,5);
    }
}
