'use strict';

let tableGenerating = (op, n) => {
  let numbers = '';
  let table = '';
  let tableHeader = '';
  let a = '';

  for (let i = 0; i <= n; i++) {
    table += `${i}`;
    numbers += `| ${i}`;
    a += '----';

    for (let j = 0; j <= n; j++) {

      if (op === '+') {
        table += `| ${i + j}`;

      } else if (op === '-') {
        table += `| ${i - j}`;

      } else if (op === '*') {
        table += `| ${i * j}`;

      } else if (op === '/') {
        table += `| ${i / j}`;
      }

      if (j === n) {
        table += '\n';
      }
    }
  }
  tableHeader = `${op}${numbers}
${a}`;

  return `${tableHeader} 
${table}`;
}

console.log(tableGenerating('+', 4));