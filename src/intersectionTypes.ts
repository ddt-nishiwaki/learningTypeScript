/**
 * ジェネリックで指定した型引数をマージした型(交差型)をTypeScriptでも表現可能です。
 * これは指定したそれぞれの型のプロパティを全て含むオブジェクトを示します。
 *
 *     <T & R>
 *
 * コンパイルコマンド
 *
 *     tsc --outDir dist src/intersectionTypes.ts
 *
 * 実行コマンド
 *
 *     node dist/intersectionTypes.js
 *
 * 期待値
 *
 * 速習タイプスクリプト 1000
 */
namespace Learning.IntersectionTypes {
    function merge<T, R>(obj1: T, obj2: R): T & R {

        // TとRをマージした型としてからのオブジェクトを初期化します
        let result = <T & R>{}

        // 第一引数に指定したオブジェクトのプロパティをresultにコピーします
        for (let key in obj1) {
            (<any>result)[key] = obj1[key];
        }

        // 第二引数に指定したオブジェクトのプロパティをresultにコピーします
        for (let key in obj2) {
            (<any>result)[key] = obj2[key];
        }

        return result;
    }

    // マージを試すためのクラスを宣言します
    class Book {
        constructor(
            private title: string,
            private price: number
        ) {}
        toString() {
            return this.title + ' ' + this.price;
        }
    }
    class Logger {
        debug() {
            console.log(this.toString());
        }
    }

    // マージを試すためのインスタンスを作成します
    let book = new Book('速習タイプスクリプト', 1000);
    let logger = new Logger();

    // マージ結果を取得します
    export let bookManager: Book & Logger = merge(book, logger);
}

// マージ結果を確認のため出力します
Learning.IntersectionTypes.bookManager.debug()