'use strict';

// コンソールにHello World!を出力する
console.log('Hello World!');
console.log(42);

const num1 = 10;
console.log(num1);
//値変更不可
let num2 = 10; 
console.log(num2);
//値変更可能

const bird_fly = true;
const human_fly = false;
console.log(bird_fly);
console.log(human_fly);

//or演算を|| , and演算を&&で表現できる
//not演算は頭に!trueとすることで否定が取れる(この時はfalse)

//比較演算子として===(等しい),!==(等しくない),>(大きい),<=(以下)

// 12 === '12'は方が違う(数値===文字列)

/*
こんなこともできる(文字列中に`${}`と書くことで値を埋め込める
`はバッククオートで@のところをシフト押しながらで打てる)*/
const age = 16;
console.log(`私の年齢は${age}です`)

//_________________________________________________

//if文の書き方
if(3<5){
console.log('3は5より小さいです');//こっちが実行される
}else{
    console.log('3は5より小さくないです'); //実行されない
}   

console.log('if文終了');

//単位について
const score = 61;

console.log(`あなたの点数は${score}点！`);

if(score > 90) {
  console.log('優秀');
} else if(score >= 60) {
  console.log('単位が出ます')
} else{
    console.log('再履修になります')
}

console.log('履修お疲れさまでした');

//_________________________________________

//switch文によるモード選択
const mode = 1;

switch(mode) {
  case 1:
    console.log('初級編');
    break;
  case 2:
    console.log('中級編');
    break;
  case 3:
    console.log('上級編');
    break;
  default: // その他の場合
    console.log('無効なモードです')
}

//______________________________________________

//while文について
let count = 0;

while(count<5){
    console.timeLog(`今は${count}回目です`);
    count++;

    //カウントが3になったら抜け出す
    if(count === 3){
        break;
    }

    continue; //whileの先頭に戻るこれ以降は実行されない
    console.log('実行されてないはず')
}

//___________________________________________________

//forループについて

for(let n = 0; n <= 10; n++) {
    // 2で割った余りが0なら偶数
    if(n % 2 === 0) {
      console.log(`${n}は偶数です`);
    } else {
      console.log(`${n}は奇数です`);
    }
  }

/*変数のスコープ（有効範囲）に気を付けて
  
const value = 10;

if(value > 5) {
  const message = `${value}は5より大きい！`;
} // messageのスコープはここまで

console.log(message);  messageにアクセスできない

*/

//=========================================================
//関数について勉強しよう

function f(x){
    return x + 1;
}

const y = f(0);
console.log(y);

/*

const y = f(0);
console.log(y);

function f(x){
    return x + 1;
}
    の順番でも良い

*/

// 数値を受け取って真偽値を返す関数
// 偶数ならtrue、奇数ならfalseを返す
function isEven(n) {
    return n % 2 === 0;
  }
  
  const num = 7;
  
  if(isEven(num)) {
    console.log(`${num}は偶数です！`);
  } else {
    console.log(`${num}は奇数です！`);
  }

  //複数の引数を持たせる
  function add(a,b){
    return a + b;
  }

  const sum = add(3,12);
  console.log(sum)//返り値は一つ

//________________________________________________

//1からendまでの自然数を足していく計算
function add2(end) {
    let result = 0;
  
    for(let i = 1; i <= end; i++) {
      result += i;
    }
  
    return result;
  }
  
  console.log(add2(10));
//もしいきなりreturnしたらその時点で関数は終了する
//スコープは関数内だけ（別の関数で同じ名前使ってもいい）

//________________________________________________________

//ユークリッドの互除法
function gcd(a, b) {
    let r = a % b;
    while(r !== 0) {
      a = b;
      b = r;
      r = a % b;
    }
  
    return b;
  }
  
  // 最大公約数（GCD）を計算する
  console.log(gcd(27, 18));

//____________________________________________________

  //再帰関数
  function fact(n) {
    if(n === 1) { return 1; }
  
    return n * fact(n-1); // 自分自身を呼び出す
  }
  
  console.log(fact(5));

//_______________________________________________________

// アロー関数を使った関数定義
// const add = function () { return a + b; }
// と同じ
const add3 = (a, b) => a + b;

console.log(add3(3, 5));

//____________________________________________________

//関数がアクセスできる変数は、定義場所で決まる
//この性質をクロージャという

//____________________________________________________

//引き算
function sub(a, b) {
    return a - b;
  }
  
  console.log(sub(5, 3)); // 2

//=============================================================
//長さ3の配列を作る, 値に制限がないため型バラバラでもいい
const array = new Array(3);

array[0] = 1;
array[1] = '文字列';
array[2] = true;

console.log(array);
console.log(array[0]);
//____________________________________________
//ループと配列について

const length = 5;
const array2 = new Array(length);

for(let i = 0; i < length; i++) {
  // 配列のi番目に数値iを格納する
  array2[i] = i;
}

console.log(array2);
//______________________________________________
const array3 = [1, 2, 3, 4, 5];

// arrayから順番に要素を取り出して
// 変数elementに代入する
for(const element of array3) {
  console.log(element);
}
//カウンタ変数が不要なら簡略化できる
//____________________________________________
const length2 = 10;

// 配列をリテラルで作る
const arrayA = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const arrayB = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// 配列を長さを指定して作る
const sum3 = new Array(length2);

// それぞれの和を計算してsumに格納する
for(let i = 0; i < length2; i++) {
  sum3[i] = arrayA[i] + arrayB[i];
}

// sumを表示する
console.log(sum3);

//===========================================================
//オブジェクトについて、文字列と値を結びつけるデータ構造

const obj = new Object();

obj['ios'] = 'Apple';
obj['Android'] = 'Google';
obj['Windows'] = 'Microsoft';

console.log(obj);

//添え字をキー、格納されている値のことをバリュー(値)という

//_____________________________________________________
const point = {
    x: 2, // プロパティ
    y: 10, // プロパティ
  
    // メソッド
    print: function () {
       console.log(this.x);
       console.log(this.y);
    }
  };
  
  // メソッドを呼び出す
  point.print();

  //オブジェクト型以外の方をプリミティブ型という

//___________________________________________________
const obj1 = { x: 10 };
const obj2 = { x: 10 };

console.log(obj1 === obj2); // false
console.log(obj1 === obj1); // true;

//等価演算子を用いてオブジェクト型を比較するときは、中身ではなく同一のオブジェクトか比較
//________________________________________________________
const array5 = [2, 4, 6, 8];

// 配列の長さを表示する
console.log(array5.length); // 4

//________________________________________________
const array6 = [2, 4, 6, 8];

// 配列に値を追加する
array6.push(10);

console.log(array6.length); // 5
console.log(array6); // [2, 4, 6, 8, 10]

//_________________________________________________________
//オブジェクトのテンプレート（プロトタイプ）を作ってそのテンプレートの構成を複製委する
//作成例1.class

class Point{
// プロトタイプを元にオブジェクトを作成したときに
  // 呼ばれるメソッド。
  // コンストラクタという
constructor(x,y){
    this.x = x;
    this.y = y;
}

distanceTo(other){
 const diffX2 = (this.x - other.x) **2;
 const diffY2 = (this.y - other.y) **2;
 const distance = Math.sqrt(diffX2 + diffY2);
return distance;
  }
}

const point1 = new Point(1,2);
const point2 = new Point(5,8);

console.log(point1.distanceTo(point2));

//プロトタイプを元に作られたオブジェクトのことをインスタンスという。

//____________________________________________________

const scores = [
    { name: '田中', math: 67 },
    { name: '鈴木', math: 92 },
    { name: '佐藤', math: 51 }
  ];
  
  for(const student of scores) {
    const name = student.name;
    const math = student.math;
    console.log(`${name}の数学の点数は${math}点です`);
  }

  //_________________________________________________________
  //二次元配列（配列はその中に配列を含められる）

  //=============================================================
//オブジェクト指向について

class Vector2{
constructor(x,y){
    this.x = x;
    this.y = y;
  }
}

function addVector2(v1,v2){
    return new Vector2(v1.x + v2.x, v1.y + v2.y);
}
/* オブジェクト指向で書くなら
    add(other) {
    return new Vector2(this.x + other.x, this.y + other.y);
  }
}
*/


const v1 = new Vector2(1,2);
const v2 = new Vector2(3,4)
const vecsum = addVector2(v1,v2);
//const vecsum = v1.add(v2);

console.log(`[${vecsum.x},${vecsum.y}]`);

//______________________________________________
//カプセル化,今回はあんまり気にしない
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    toString() {
      return `${this.title}(${this.author})`;
    }
  }
  
  // 本棚を表すクラス
  class Bookshelf {
    constructor() {
      // 初期値は空の配列
      // 変数名の先頭にアンダースコアをつけることで
      // 外からは変更してはいけないということを示す
      this._books = [];
    }
  
    // メソッドを通じて本を追加するようにする
    addBook(book) {
      this._books.push(book);
    }
  
    // プロパティの取得はgetterを通してする
    get books() {
      // Array.fromは配列のコピーを作るメソッド
      // 直接返すと外から変更できるようになってしまうので
      // コピーを返す
      return Array.from(this._books);
    }
  }
  
  const myBookshelf = new Bookshelf();
  const book = new Book('天の光は全て星', 'フレドリック・ブラウン');
  
  // プロパティをメソッドを通じて変更する
  myBookshelf.addBook(book);
  
  // 表示
  for(const b of myBookshelf.books) {
    console.log(b.toString());
  }

  //____________________________________________________
//ポリモーフィズム
// 四角形クラス
// 面積を計算するcalcAreaメソッドを持つ
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calcArea() {
      return this.width * this.height;
    }
  }
  
  // 円を表すクラス
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    calcArea() {
      return this.radius * this.radius * Math.PI;
    }
  }
  
  // 三角形を表すクラス
  class Triangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calcArea() {
      return this.width * this.height / 2;
    }
  }
  
  // 異なるオブジェクトの混在した配列
  const geometries = [
    new Rectangle(2, 4),
    new Circle(5),
    new Triangle(3, 2)
  ];
  
  // どのオブジェクトもcalcAreaメソッドを持っているので
  // 同じメソッド呼び出しで統一的に扱うことができる
  for(const g of geometries) {
    console.log(g.calcArea());
  }

  //________________________________________________________
  //継承(extend)

  // 四角形クラス
class Rectangle2 {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calcArea() {
      return this.width * this.height;
    }
  }
  
  // 正方形クラス
  //継承をしたときはsuper()という関数を呼び出して、
  //継承元のコンストラクタを呼び出す必要がある
  class Squre extends Rectangle2 {
    constructor(size) {
      super(size, size);
    }
  }

  const geometries2 = [
    new Rectangle(2, 4),
    new Squre(5),
  ];
  
  // どのオブジェクトもcalcAreaメソッドを持っているので
  // 同じメソッド呼び出しで統一的に扱うことができる
  for(const u of geometries2) {
    console.log(u.calcArea());
  }

  //元のクラスを変更することで継承したクラスにも影響が出るので注意が必要
  //=================================================================
//アルゴリズム（2分木）

// 二分木のノード
class BinaryTreeNode {
    constructor(value) {
      // そのノードの値
      this.value = value;
  
      // 左の子ノードと右の子ノード
      this.left = null;
      this.right = null;
    }
  }
  
  // ノードを作る
  const a = new BinaryTreeNode('A');
  const b = new BinaryTreeNode('B');
  const c = new BinaryTreeNode('C');
  const d = new BinaryTreeNode('D');
  const e = new BinaryTreeNode('E');
  
  // 各ノードをつなぐ
  a.left = b;
  a.right = c;
  
  b.left = d;
  b.right = e;
  
  // ノードAから左->右と辿ったところの値を表示する。
  console.log(a.left.right.value); // 'E'

//____________________________________________________
//バブルソート

function bubbleSort(array7) {
    const n = array7.length - 1;
    // end = n, n-1, n-2, n-3, ..., 3, 2, 1
    for(let end = n; end > 0; end--) {
      // i = 1, 2, 3, ..., end-2, end-1
      for(let i = 0; i < end; i++) {
        // 交換する
        if(array7[i] > array7[i+1]) {
          [array7[i], array7[i+1]] = [array7[i+1], array7[i]];
        }
      }
    }
  }
  
  const array7 = [7, 5, 10, 3, 4];
  bubbleSort(array7);
  console.log(array7); // [3, 4, 5, 7, 10]

//_______________________________________________________
//クイックソート

// 配列をクイックソートする関数
function quickSort(array8, start, end) {
    // startとendが逆転していたら終わり
    if(end <= start) {
      return;
    }
  
    // ピボットは先頭のものにする
    //   ※本来はもう少し注意深くピボットを選ぶ
    const pivot = array8[start];
  
    // 配列の前半と後半に振り分ける
    let left = start;
    let right = end;
    while(true) {
      while(array8[left] < pivot) { left++; }   // pivot以上の値を左から探す
      while(array8[right] > pivot) { right--; } // pivot以下の値を右から探す
      if(left >= right) { break; }             // leftとrightが逆転したらwhileを抜ける
      [array8[left], array8[right]] = [array8[right], array8[left]]; // 値の入れ替え
      left++;
      right--;
    }
  
    // 配列の前半と後半をそれぞれクイックソート
    quickSort(array8, start, left - 1);
    quickSort(array8, right + 1, end);
  }
  
  const array8 = [10, 7, 1, 6, 12, 10, 8, 9];
  quickSort(array8, 0, array8.length - 1);
  console.log(array8); // [1, 6, 7, 8, 9, 10, 10, 12]

//___________________________________________________________
