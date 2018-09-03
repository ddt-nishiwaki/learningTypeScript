/**
 * 文字列リテラル自体を型として使用可能です。
 * これは設定した文字列以外を許容しない型となります。
 * 
 *     let 変数名 : '任意の文字列';
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/stringliteral.ts
 * 
 * 実行コマンド
 * 
 *     node dist/stringliteral.js
 * 
 * 期待値
 * 
 *     コンパイルエラー
 */
type Seasons = 'spring' | 'summer' | 'autumn' | 'winter';

// spring, summer, autumn, winter 以外の文字列はコンパイルエラーになります。
let season : Seasons = '春';
