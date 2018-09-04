/**
 * ちょっとしたコードでインターフェースやクラスなどを定義するまでもない場合、
 * オブジェクトリテラルをその場限りの型として利用する方法があります。
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/instantTypeCheck.ts
 * 
 * 期待値
 * 
 *     制限している機能を使おうとしているため
 *     コンパイルエラー
 */
namespace Learning.InstantTypeCheck {
    export class MyClass {
        print() {
            console.log('出力を行います');
        }
        request() {
            console.log('リクエストを送信します');
        }
    }
    /*
     * 特定の機能を使う必要がない文脈でクラスを使いたい場合に機能を制限することが簡単にできます
     */
    export let myClass: { print(); } = new MyClass(); // MyClassのprint()以外は使わない場合
    // 使用を制限された機能の利用を試みます
    myClass.reqest();
}