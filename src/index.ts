import { nonDivisibleSubset } from './test';

const result = nonDivisibleSubset(
  7,
  '278 576 496 727 410 124 338 149 209 702 282 718 771 575 436'
    .split(' ')
    .map(item => parseInt(item, 10))
);
console.log(result);
