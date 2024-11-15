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

// Spread 연산자
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]
let abj1 = {
  a: 1,
  b: 2,
}
let abj2 = {
  ...abj1,
  c: 3,
  d: 4,
}
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// Rest 매개변수 (나머지 매개변수)
function funcB(one, ...rest) {
  console.log(one); // 1
  console.log(rest); // [2, 3]
}
funcB(...arr1)

// 원시타입과 객체타입은 값이 저장되거나 복사되는 과정이 다르다.
// 원시타입(불변값) : 값 자체로써 변수에 저장되고 복사된다. (Number, String, Boolean 등)
// 객체타입(가변값) : 참조값을 통해 변수에 저장되고 복사된다. (Object, Array, Function 등)

// 얕은 복사 : 객체의 참조값을 복사하여 원본 객체가 수정될 수 있음
let o1 = {name: '김테이'} // <= 원본!
let o2 = o1;
o2.name = '김태태'
console.log(o1.name) // 김태태 (원본 변경됨!)

// 깊은 복사 : 새로운 객체를 생성하면서 프로퍼티만 따로 복사하여 원본 객체가 수정될 일이 없어서 안전!
let o3 = {...o1};
o3.name = '김형태'
console.log(o1.name) // 김태태 (원본 변경안됨!)

// 얕은 비교
console.log(o1 === o2); // true 
console.log(o1 === o3); // false

// 깊은 비교
console.log(JSON.stringify(o1) === JSON.stringify(o2)) // true 
console.log(JSON.stringify(o1) === JSON.stringify(o3)) // false 

// 배열과 함수도 사실 객체다!
// 배열은 객체에 순차 저장, 순회 등이 추가된 기능
// 함수는 객체에 호출, 선언 등이 추가된 기능

console.log('==================================')

// 배열 순회
// for of 반복문 : 배열에 있는 값을 순회
for(let item of arr1) {
  console.log(item)
  // 1
  // 2
  // 3
}

// 객체 순회
// Object.keys 사용 : 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys) // [name, age, hobby]
// Object.values 사용 : 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person)
console.log(values) // ['김테이', 30, '낮잠]
// for in 반복문
for(let key in arr1) {
  console.log(key)
  // 0
  // 1
  // 2
}

console.log('==================================')

// 배열 메서드 - 요소 조작
let numArr = [1, 2, 3];
const pushResult= numArr.push(4, 5, 6)
console.log(pushResult) // 6 -- push메서드는 length를 반환함

const popResult = numArr.pop();
console.log(popResult) // 6 -- pop은 맨 뒤에 있는 item을 빼고 반환함

const shiftResult = numArr.shift();
console.log(shiftResult) // 1 -- shift는 맨 앞에 있는 item을 빼고 반환함

const unshiftResult = numArr.unshift(0);
console.log(unshiftResult) // 5 -- unshift는 요소를 맨 앞에 붙히고 length를 반환함

// shift, unshift는 push와 pop보다는 느리다.
// 왜냐면 앞 둘은 맨 앞에걸 제거하거나 붙히면서 다른 요소들을 옮겨야함! (비효율적) ***

const sliceResult = numArr.slice(2, 4);
console.log(numArr) // [0, 2, 3, 4, 5]
console.log(sliceResult) // [3, 4] -- slice는 원본 배열을 자르지 않는다!

let numArr2 = [7, 7, 7]
const concatResult = numArr.concat(numArr2);
console.log(numArr) // [0, 2, 3, 4, 5]
console.log(concatResult) // [0, 2, 3, 4, 7, 7, 7] -- concat은 두 배열을 이어 붙혀서 새로운 배열을 반환

console.log('==================================')

// 배열 메서드 - 순회와 탐색
let doubleArr = []
numArr.forEach((item)=>{
  doubleArr.push(item * 2);
})
console.log(doubleArr) // [0, 4, 6, 8, 10]

const includesResult = numArr.includes(0);
console.log(includesResult) // true -- 0이 있다.

const indexOfResult = numArr.indexOf(3);
console.log(indexOfResult) // 2 -- 3의 index가 2다.

const findIndexResult = numArr.findIndex((item) => item % 2 !== 0 )
console.log(findIndexResult) // 2 -- 홀수의 첫번째 index가 2다.

// indexOf는 얕은 비교! 객체 타입의 요소를 가진 배열에서는 못 찾음 ***
// findIndex는 깊은 비교! 객체 타입의 요소를 가진 배열에서도 잘 찾음 ***

const findResult = numArr.find((item) => item % 2 !== 0) 
console.log(findResult) // 3 -- findIndex와 비슷하지만 index가 아닌 요소를 반환함

console.log('==================================')

// 배열 메서드 - 배열 변형
let objArr = [
  {name: '태태', hobby: '수영'},
  {name: '테이', hobby: '헬스'},
  {name: '형태', hobby: '야식'},
]
const filterResult = objArr.filter((item) => item.hobby === '야식');
console.log(filterResult) // [{name: '형태', hobby: '야식'}] 
// filter은 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열들로 반환

const mapResult = objArr.map((item) => {
  return item.hobby = '공부'
})
console.log(mapResult) // ['공부', '공부', '공부']
console.log(objArr) // objArr의 hobby 가 다 '공부'로 바뀜. 즉, 새로운 배열도 반환하고 원본도 바꿈
// map은 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환

let nameArr = objArr.map((item) => item.name);
console.log(nameArr) // ['태태', '테이', '형태'] -- map으로 단순 데이터만 추출할 수 있음

let stringArr = ['banana', 'apple', 'dog'];
let numArr3 = [3, 52, 1, 20, 7, 2];
stringArr.sort()
console.log(stringArr) // ['apple', 'banana', 'dog'] -- sort는 사전 순으로 정렬된다.
numArr3.sort()
console.log(numArr3) // 그냥 sort로는 숫자 비교는 안됨 (근데 왜 되는거지)
numArr3.sort((a, b) => a > b)
console.log(numArr3) // 암튼 뭐 기준을 정해야한다고함

const toSortedResult = stringArr.toSorted();
console.log(toSortedResult)

const joinResult = stringArr.join();
console.log(joinResult) // apple,banana,dog
const joinResult2 = stringArr.join(' & ');
console.log(joinResult2) // apple & banana & dog

console.log('==================================')

// Date 객체
let date1 = new Date('2024/11/15/10:10:10')
let date2 = new Date(2024,11,15,10,10,10)

// 타임 스탬프 -- 특정 시간이 1970.01.01 00:00:00 로부터 몇 ms가 지낫는지 의미하는 숫자값
// 1970.01.01 00:00:00 -- 협정 세계 시 (utc) 공식적으로 시간이 시작되는 지점
let ts1 = date1.getTime();
let date3 = new Date(ts1);

// 시간을 여러 포맷으로 추출하기
console.log(date1.toDateString()); // Fri Nov 15 2024
console.log(date1.toLocaleString()); // 2024. 11. 15. 오전 10:10:10

console.log('==================================')

// 자바스크립트는 기본적으로 동기적으로 코드를 실행함
console.log(1)
setTimeout(()=>{
  console.log(2)
}, 3000);
console.log(3)
// ==> 1 3 2
// 자바스크립트는 쓰레드가 1개.
// 자바스크립트의 비동기 작업은 Web APIs 브라우저가 관리하는 별도의 영역에서 실행된다.
