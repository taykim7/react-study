// CJS (Common JS 모듈 시스템)
// const { add, sub } = require('./math');

// ESM (ES 모듈 시스템)
import multiply, { add, sub } from './math.js';

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multiply(1, 2));