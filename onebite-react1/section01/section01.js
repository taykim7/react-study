// 변수와 상수
let age;
age = 30;
const birth = 714
console.log(age)
console.log(birth)

// 명명 규칙들
let $_name = '네이밍으로 $, _ 만 사용할 수 있음';
let name1 = '네이밍으로 숫자로 시작할 수 없음'
console.log($_name)
console.log(name1)

// 네이밍은 스윗하게 ^^
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount- refundCount;
console.log(totalSalesCount)

// 묵시적 형변환 (암묵적 형변환)
// -> 자바스크립트 엔진이 알아서
let num = 10;
let str = "20";
const result = num + str;
console.log(result) // => 1020

// 명시적 형변환
// -> 내장함수를 이용
let str2  = "20";
let strToNum = Number(str2);
console.log(10 + strToNum) // => 20
let num2 = 20;
let numToStr = String(num2);
console.log(numToStr + '입니다') // => 20입니다

// 대입 연산자 =
// 산술 연산자 + - * / %
// 복합 대입 연산자 += -= *= /= %=
// 증감 연산자 ++ -- 전위 연산 ++a --a 후위 연산 a++ a--
// 논리 연산자 || && !
// 비교 연산자 === !== > < >= <=

// null 병합 연산자 ??
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아냄
let var1;
let var2 = 10;
let var3 = var1 ?? var2;
console.log(var3) // => 10

// typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능
let var4 = 1;
console.log(typeof var4) // => number

// 삼항연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var5 = 10;
let res = var5 % 2 === 0 ? '짝수' : '홀수'
console.log(res) // => 짝수

// 조건문 if switch

// 반복문 for(초기식; 조건식; 증감식) 