'use strict';

const fs = require('fs');

function avg(nums) {
  let total = 0;
  nums.forEach(num => total += num);
  return total / nums.length;
}

function avgPerf(data) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      console.log(`${key} -> ${avg(data[key])}`);
    }
  }
}
