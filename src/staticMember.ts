/**
 * 静的メンバーを利用する場合、staticをつけることで実現可能です。
 * 
 *     public static 変数名: 型
 * 
 * 注意として、クラス内から静的メンバにアクセスする場合でも this が必要です。
 * 
 *     this.変数名
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/staticMember.ts 
 * 
 * 実行コマンド
 * 
 *     node dist/staticMember.js 
 * 
 * 期待値
 * 
 *     3.14159
 *     78.53975
 */
class Figure {
    // πの値を持つ静的メンバを定義する
    static PI: number = 3.14159;
    // 与えた半径から円の面積を求める静的メソッドを定義する
    static circle(radius: number): number {
        return radius * radius * this.PI;
    }
}

// 静的メンバへのアクセスを確認するため出力する
console.log(Figure.PI);
// 静的メソッドへのアクセスを確認するため出力する
console.log(Figure.circle(5));