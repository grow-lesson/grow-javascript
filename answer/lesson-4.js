// 問題1の答え:
let arr = [2, 4, 6, 8, 10];
for (let i = 0; i < arr.length; i++) {
  arr[i] *= 2;
}
console.log(arr); // 出力結果：[4, 8, 12, 16, 20]




// 問題2の答え:
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  arr[i] *= arr[i];
}
console.log(arr); // 出力結果：[1, 4, 9, 16, 25]





// 問題3の答え:
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum); // 出力結果：15






// 問題4の答え:
let arr = [10, 20, 30, 40, 50];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max); // 出力結果：50






// 問題5の答え:
let arr = [5, 10, 15, 20, 25];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    count++;
  }
}
console.log(count); // 出力結果：3








// 問題6の答え:
for (let i = 1; i <= 5; i++) {
  let line = '';
  for (let j = 0; j < i; j++) {
    line += '*';
  }
  console.log(line);
}






// 問題7の答え:
for (let i = 1; i <= 5; i++) {
  let line = '';
  for (let j = 0; j < 5 - i; j++) {
    line += ' ';
  }
  for (let k = 0; k < i; k++) {
    line += '*';
  }
  console.log(line);
}







// 問題8の答え:
for (let i = 1; i <= 3; i++) {
  let line = '';
  for (let j = 0; j < 3 - i; j++) {
    line += ' ';
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    line += i;
  }
  console.log(line);
}







// 問題9の答え:
for (let i = 3; i >= 1; i--) {
  let line = '';
  for (let j = 0; j < 3 - i; j++) {
    line += ' ';
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    line += i;
  }
  console.log(line);
}







// 問題10の答え:
for (let i = 1; i <= 5; i++) {
  let line = '';
  for (let j = 0; j < i; j++) {
    line += i;
  }
  console.log(line);
}






// 問題11の答え:
for (let i = 5; i >= 1; i--) {
  let line = '';
  for (let j = 0; j < i; j++) {
    line += i;
  }
  console.log(line);
}






