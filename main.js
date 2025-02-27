'use strict'

const N = +prompt("Введіть ціле число: ");
let i = 2;

for (; i < N; i++) {
    if (N % i === 0) {
        console.log(`${N} не є простим числом`);
        break;
    }
}

if (i === N && N > 1) {
    console.log(`${N} є простим числом`);
}