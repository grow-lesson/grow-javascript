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
function calculatePolygonAngleCount(sides) {
  // 多角形の角度を計算する公式: (n-2) * 180 / n
  const angle = (sides - 2) * 180 / sides;

  // 計算結果を返す
  return angle;
}

// 例の使用:
console.log(calculatePolygonAngleCount(6)); // 出力: 120


// 問題3の答え:
function calculateTriangleArea(base, height) {
  // 三角形の面積を計算
  let area = (base * height) / 2;
  // 計算された面積を返す
  return area;
}

// 例の使用:
console.log(factorial(calculateTriangleArea(5, 8))); // 出力: 20



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
function calculateCircleArea(radius) {
  // 円周率の仮定
  const pi = 3.14;

  // 円の面積の計算
  const area = pi * radius * radius;

  // 計算結果を返す
  return area;
}

// 例の使用:
console.log(calculateCircleArea(5)); // 出力: 78.54

