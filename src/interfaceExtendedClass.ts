/**
 * TypeScriptではinterface機能がサポートされています。
 * Javaなどの言語と異なる部分で、interface自体が通常のクラスを継承することができます。
 * この場合、クラスの実装部分は無視されて、シグニチャだけが継承されます。
 * 
 *     宣言
 *         interface インターフェース名 extends クラス名 {
 *         }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/interfaceExtendedClass.ts
 * 
 * 実行コマンド
 * 
 *     node dist/interfaceExtendedClass.js
 * 
 * 期待値
 * 
 *     25
 *     this is triangle
 */
namespace Learning.Interface.ExtendedClass {
    /*
     * このクラスをinterfaceに継承してみます
     * 継承先のインターフェースではここの実装は無視されます
     */
    export class FigureBase {
        constructor(
            protected width: number,
            protected height: number
        ){
            this.width = width;
            this.height = height;
        }
        getArea(): number {
            return this.width * this.height;
        }
        getDescriptionMessage(description:string): string {
            return 'Please setting description.'
        }
    }
    /*
     * 通常のクラスをインターフェースに継承します。
     * この場合、継承されるのはシグニチャのみなので
     * 下記のプロパティ、メソッドの実装を強制することになります
     *     protected width: number
     *     protected height: number
     *     getArea(): number
     *     getDescriptionMessage: string
     */
    export interface FigureExtends extends FigureBase {}

    /*
     * 別のクラスを継承したインターフェースを実装します。
     * インターフェースが継承しているクラスのプロパティは protected なので
     * 単純に実装しようとすると 実装はできているけど継承できていないというややこしいエラーになります。
     * この場合は結局、インターフェースが継承しているクラスを同じく継承する必要があります。
     * 
     * 別の角度から考えると public でないものがインターフェースになってしまうので
     * privateメンバやメソッドがあるものをinterfaceに継承すると実装できないインターフェースができてしまいます。
     */
    export class Triangle extends FigureBase implements FigureExtends {
        // シグニチャがprotectedになっているので
        // 結局インターフェースが継承しているクラスを同様に継承する必要があります。
        constructor(
            protected width: number,
            protected height: number
        ) {
            super(width, height);
        }
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
namespace Learning.Interface.ExtendedClass.playground {
    export let triangle = new Learning.Interface.ExtendedClass.Triangle(10,5);
}

// Figureインターフェースのメソッドを確認のため実行します。
console.log(
    Learning.Interface.ExtendedClass.playground.triangle.getArea()
)
// DescriptionMessageインターフェースのメソッドを確認のため実行します。
console.log(
    Learning.Interface.ExtendedClass.playground.triangle.getDescriptionMessage()
)