/**
 * 名前空間を利用するにはECMAScript5の機能を利用します。
 * 名前空間は入れ子の構造にすることも可能です。
 * この場合2通りの書き方が可能です。
 * 
 *     namespace 名前空間名 {
 *         export namespace 名前空間名 {
 *             export class MyClass { ... }
 *             export function MyFunction { ... }
 *         }
 *     }
 * 
 *     namespace 名前空間名.名前空間名 {
 *         export class MyClass { ... }
 *         export function MyFunction { ... }
 *     }
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/namespace.ts
 * 
 * 実行コマンド
 * 
 *     node dist/namespace.js
 * 
 * 期待値
 * 
 *     Bob
 * 
 */
namespace MainApp {
    export namespace Charactor {
        export class Human {
            constructor(
                private name: string,
            ) {
                this.name = name;
            }
            get myName(): string {
                return this.name;
            }
        }
    }
}

// 名前空間からクラスにアクセスしインスタンスを作成する
let bob = new MainApp.Charactor.Human('Bob');
// 確認のためインスタンスのプロパティを出力する
console.log(bob.myName);