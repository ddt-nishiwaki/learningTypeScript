/**
 * 外部ライブラリを使用する場合、そのままではコンパイルやコード補完などで不便になるため
 * 型定義ファイルを導入します。
 * 今回はjQueryを例にしますが、実行にはwindowオブジェクトが必要なので
 * コンパイルの確認までとします。
 * 
 * 型定義ファイル導入コマンド
 * 
 *     npm install @type/jquery --save
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/useExternalLibraries.ts
 * 
 * 期待値
 * 
 *     コンパイルができること
 */
// 型定義ファイルによって $をjQueryのコードとしてコンパイルできる事を確認します。
$(function(){
    console.log('hello jquery');
});