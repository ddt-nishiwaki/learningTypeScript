/**
 * TypeScriptのHello Worldです。
 * 
 * 事前準備としてnode.jsをインストールしnpmコマンドが使えることを確認してください
 * リポジトリをクローンしたら下記コマンドを実行します。
 * 
 *     npm init
 * 
 * .tsファイルをコンパイルできることを確認するため下記コマンドを実行し
 * distディレクトリに.jsファイルが出力されていることを確認してください。
 * 
 *     tsc --outDir dist src/hello.ts 
 *     node dist/hello.js
 * 
 * HelloWorld が出力されていることを確認してください。
 */
class HelloWorld {

    // messageを設定するコンストラクタです
    constructor(public m_message : string) {}

    // messageのゲッターです
    getMessage() {
        return this.m_message;
    }
}

// クラスのインスタンス化を行います
var helloWorld = new HelloWorld("HelloWorld");
// インスタンスが正しく生成されているかをメンバを確認することで確かめます。
console.log(helloWorld.getMessage());