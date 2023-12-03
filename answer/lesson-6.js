// 問題1の答え:
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "偶数";
  } else {
    return "奇数";
  }
}

// 例の使用:
console.log(isEvenOrOdd(4)); // 出力: "偶数"
console.log(isEvenOrOdd(7)); // 出力: "奇数"


// 問題2の答え:
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// 例の使用:
console.log(isPalindrome("level")); // 出力: true
console.log(isPalindrome("hello")); // 出力: false


// 問題3の答え:
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// 例の使用:
console.log(factorial(5)); // 出力: 120
console.log(factorial(0)); // 出力: 1


// 問題4の答え:
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// 例の使用:
console.log(findMax([3, 8, 1, 6, 2])); // 出力: 8
console.log(findMax([-1, -5, -2])); // 出力: -1

// 問題5の答え:
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// 例の使用:
console.log(isPrime(11)); // 出力: true
console.log(isPrime(6)); // 出力: false

