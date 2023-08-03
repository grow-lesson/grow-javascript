// 問題1の答え:
let arr = [3, 7, 2, 10, 5];
let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
console.log(sum); // 出力結果：27




// 問題2の答え:
let arr = [15, 23, 8, 14, 20];
let product = arr[0] * arr[1] * arr[2] * arr[3] * arr[4];
console.log(product); // 出力結果：151200




// 問題3の答え:
let arr = [5, 2, 9, 6, 4];
let max = arr[0];
if (arr[1] > max) {
  max = arr[1];
}
if (arr[2] > max) {
  max = arr[2];
}
if (arr[3] > max) {
  max = arr[3];
}
if (arr[4] > max) {
  max = arr[4];
}
console.log(max); // 出力結果：9





// 問題4の答え:
let arr = [18, 25, 12, 9, 30];
let min = arr[0];
if (arr[1] < min) {
  min = arr[1];
}
if (arr[2] < min) {
  min = arr[2];
}
if (arr[3] < min) {
  min = arr[3];
}
if (arr[4] < min) {
  min = arr[4];
}
console.log(min); // 出力結果：9





// 問題5の答え:
let numbers = [7, 12, 5, 9, 3, 15];
let oddCount = 0;

if (numbers[0] % 2 !== 0) { oddCount++; }
if (numbers[1] % 2 !== 0) { oddCount++; }
if (numbers[2] % 2 !== 0) { oddCount++; }
if (numbers[3] % 2 !== 0) { oddCount++; }
if (numbers[4] % 2 !== 0) { oddCount++; }
if (numbers[5] % 2 !== 0) { oddCount++; }

console.log("奇数の数の個数:", oddCount);







// 問題6の答え:
let numbers = [10, 20, 30, 40, 50];
let doubledNumbers = [];

doubledNumbers[0] = numbers[0] * 2;
doubledNumbers[1] = numbers[1] * 2;
doubledNumbers[2] = numbers[2] * 2;
doubledNumbers[3] = numbers[3] * 2;
doubledNumbers[4] = numbers[4] * 2;

console.log("2倍の配列:", doubledNumbers);





// 問題7の答え:
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = [];

squaredNumbers[0] = numbers[0] * numbers[0];
squaredNumbers[1] = numbers[1] * numbers[1];
squaredNumbers[2] = numbers[2] * numbers[2];
squaredNumbers[3] = numbers[3] * numbers[3];
squaredNumbers[4] = numbers[4] * numbers[4];

console.log("2乗の配列:", squaredNumbers);
