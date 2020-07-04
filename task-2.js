'use strict';

let formatStr = function(str) {
  if (str.length === 0 || str[0] === '0' || isNaN(str)) {
    return console.log('Ошибка! Получены неверные данные.');
  } else {
    let num = parseInt(str, 10);
    let newStr = num.toLocaleString('en-US') + '';
    return newStr;
  }
}
console.log(formatStr('409089878665690'));