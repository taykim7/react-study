// 의외로 Truthy한 값
let t1 = [];
let t2 = {};
let t3 = ()=> {};
if (t1) console.log('truethy')
if (t2) console.log('truethy')
if (t3) console.log('truethy')

// 단락 평가 (short-circuit Evaluation)
// AND 연산자(&&)와 OR 연산자(||) 를 활용해서 특정 조건으로 함수를 호출하게 할 수 있음
function printName(person) {
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
}
printName(); // undefined라서 'person의 값이 없음' 가 호출된다
printName('김테이') // '김테이'가 호출된다.
// T || T => 첫번째 T가 호출된다
// T && T => 두번째 T가 호출된다

// 배열의 구조분해할당
let arr = [1, 2, 3];
let [one, two, three, four = '기본값'] = arr;
console.log(one, two, three, four) // => 1 2 3 기본값

// 객체의 구조분해할당
let person = {
  name: '김테이',
  age: 30,
  hobby: '낮잠'
}
let {name, age: myAge} = person;
console.log(name, myAge); // => 김테이 30

// 객체의 구조분해할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby}) => {
  console.log(name, age, hobby)
}
func(person);