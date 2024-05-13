// 問題1の答え:
let num = 18;
if (num % 2 === 0) {
  console.log("偶数です");
} else {
  console.log("奇数です");
}



// 問題2の答え:
let score = 75;
if (score >= 60) {
  console.log("合格");
} else {
  console.log("不合格");
}



// 問題3:
let x = -5;
if (x > 0) {
  console.log("正の数です");
} else if (x < 0) {
  console.log("負の数です");
} else {
  console.log("0は正でも負でもありません");
}




// 問題4の答え:
let a = 15;
let b = 10;
if (a > b) {
  console.log("aはbよりも大きいです");
} else {
  console.log("aはb以下です");
}




// 問題5の答え:
let month = 11;
let monthName;

switch (month) {
  case 1:
    monthName = "Jan.";
    break;
  case 2:
    monthName = "Fed.";
    break;
  case 3:
    monthName = "Mar.";
    break;
  case 4:
    monthName = "Apr.";
    break;
  case 5:
    monthName = "May.";
    break;
  case 6:
    monthName = "Jun.";
    break;
  case 7:
    monthName = "Jul.";
    break;
  case 8:
    monthName = "Aug.";
    break;
  case 9:
    monthName = "Sep.";
    break;
  case 10:
    monthName = "Oct.";
    break;
  case 11:
    monthName = "Nov.";
    break;
  case 12:
    monthName = "Dec.";
    break;
  default:
    monthName = "無効な月です"
    break;
}

console.log(monthName);





// 問題6の答え:
let num = 9;
if (num % 3 === 0) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}




