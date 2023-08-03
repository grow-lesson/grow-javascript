問題1:

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}



問題2:

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    count++;
  }
}
console.log(count);



問題3:

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);


問題4:

let count = 0;
// 1から100までの整数をループ
for (let i = 1; i <= 100; i++) {
  // 3と5の公約数を判定
  if (i % 3 === 0 && i % 5 === 0) {
    count++;
  }
}
console.log(count);



問題5:

let sum = 0;
// 1から100までの整数をループ
for (let i = 1; i <= 100; i++) {
  // 3と7の公約数を判定
  if (i % 3 === 0 && i % 7 === 0) {
    sum += i;
  }
}
console.log(sum);



問題6:

for (let i = 0; i < 3; i++) {
  let line = '';
  for (let j = 0; j < 2 - i; j++) {
    line += ' ';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    line += '*';
  }
  console.log(line);
}
for (let i = 1; i < 3; i++) {
  let line = '';
  for (let j = 0; j < i; j++) {
    line += ' ';
  }
  for (let k = 0; k < 5 - 2 * i; k++) {
    line += '*';
  }
  console.log(line);
}


問題7:

for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j < i; j++) {
    line += ' ';
  }
  line += '*';
  for (let k = 0; k < 5 - i - 1; k++) {
    line += ' ';
  }
  line += '*';
  console.log(line);
}
for (let i = 0; i < 4; i++) {
  let line = '';
  for (let j = 0; j < 4 - i - 1; j++) {
    line += ' ';
  }
  line += '*';
  for (let k = 0; k < i; k++) {
    line += ' ';
  }
  line += '*';
  console.log(line);
}


問題8:

for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j < 5; j++) {
    if (j === i || j === 4 - i) {
      line += '*';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}


問題9:

for (let i = 0; i < 4; i++) {
  let line = '';
  for (let j = 0; j < 2 - i; j++) {
    line += ' ';
  }
  for (let k = 0; k < 2 * (i + 1) - 1; k++) {
    line += '*';
  }
  console.log(line);
}



問題10:

for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j < 3 - i; j++) {
    line += ' ';
  }
  for (let k = 0; k < 2 * (3 - i) + 1; k++) {
    line += '*';
  }
  console.log(line);
}
