/**
 * 特定のオブジェクトや構造を type を使って定義できますが
 * 同じことを interface を使って実現することもできます。
 * 
 * コンパイルコマンド
 * 
 *     tsc --outDir dist src/defineType.ts
 * 
 * 期待値
 * 
 *     コンパイルできること
 */
namespace Learning.DefineType {
    // typeを使った型宣言
    export type Person = {
        name:string,
        age: number
    }
    export let person: Person = {
        name:'fuga',
        age:20
    }

    // インターフェースを型宣言に利用
    interface Human {
        name:string,
        age:number
    } 
    export let human: Human = {
        name:'John',
        age:21
    }
}