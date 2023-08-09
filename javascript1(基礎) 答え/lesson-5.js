// 問題1の答え:
let products = [
  { name: "シャンプー", price: 800, stock: 10 },
  { name: "コンディショナー", price: 700, stock: 8 },
  { name: "ボディーソープ", price: 400, stock: 15 },
  { name: "歯ブラシ", price: 150, stock: 20 },
  { name: "歯磨き粉", price: 300, stock: 18 }
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price >= 500) {
    console.log(products[i].name);
  }
}

for (let i = 0; i < products.length; i++) {
  if (products[i].stock >= 10) {
    console.log(products[i].name + ": 在庫" + products[i].stock + "個");
  }
}

for (let i = 0; i < products.length; i++) {
  if (products[i].price <= 300 && products[i].stock >= 15) {
    console.log(products[i].name + ": 価格" + products[i].price + "円, 在庫" + products[i].stock + "個");
  }
}




// 問題2の答え:
let students = [
  { name: "田中", score: 85 },
  { name: "山田", score: 92 },
  { name: "佐藤", score: 78 },
  { name: "鈴木", score: 60 },
  { name: "高橋", score: 95 }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].score >= 80) {
    console.log(students[i].name + ": 点数" + students[i].score + "点");
  }
}

for (let i = 0; i < students.length; i++) {
  if (students[i].score < 70) {
    console.log(students[i].name + ": 点数" + students[i].score + "点");
  }
}

let maxScore = -1;
let topStudent = "";

for (let i = 0; i < students.length; i++) {
  if (students[i].score > maxScore) {
    maxScore = students[i].score;
    topStudent = students[i].name;
  }
}

console.log("最高点の学生: " + topStudent + "（" + maxScore + "点）");






// 問題3の答え:
let products = [
  { name: "りんご", price: 120, stock: 10 },
  { name: "バナナ", price: 80, stock: 5 },
  { name: "みかん", price: 60, stock: 15 },
  { name: "ぶどう", price: 200, stock: 3 },
  { name: "いちご", price: 150, stock: 8 }
];

for (let i = 0; i < products.length; i++) {
  if (products[i].stock <= 5) {
    console.log(products[i].name + ": 在庫" + products[i].stock + "個");
  }
}

let maxPrice = -1;
let mostExpensiveProduct = "";

for (let i = 0; i < products.length; i++) {
  if (products[i].price > maxPrice) {
    maxPrice = products[i].price;
    mostExpensiveProduct = products[i].name;
  }
}

console.log("最も高価な商品: " + mostExpensiveProduct + "（" + maxPrice + "円）");

for (let i = 0; i < products.length; i++) {
  if (products[i].stock === 0) {
    console.log(products[i].name + ": 在庫切れ");
  }
}



