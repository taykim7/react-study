// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// CJS (Common JS 모듈 시스템)
// module.exports = {
//   add,
//   sub
// };

// ESM (ES 모듈 시스템)
// export { add, sub };