'use strict';

const rate = 26; // Курс долара
for (let dollars = 10; dollars <= 100; dollars += 10) {
  console.log(`${dollars} USD = ${dollars * rate} UAH`);
}