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
let arr = [20, 4, 8, 12, 10];
let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
let average = sum / arr.length;
console.log(average); // 出力結果：10.8






// 問題6の答え:
let arr = [7, 12, 5, 9, 8];
let count = 0;
if (arr[0] >= 3 && arr[0] % 2 === 0) {
  count++;
}
if (arr[1] >= 3 && arr[1] % 2 === 0) {
  count++;
}
if (arr[2] >= 3 && arr[2] % 2 === 0) {
  count++;
}
if (arr[3] >= 3 && arr[3] % 2 === 0) {
  count++;
}
if (arr[4] >= 3 && arr[4] % 2 === 0) {
  count++;
}
console.log(count); // 出力結果：3





