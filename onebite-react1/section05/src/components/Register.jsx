import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  
  // 통합 State
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  })

  // Ref
  // const refObj = useRef(0);
  // console.log(refObj) // => {current: 0}
  const countRef = useRef(0);
  const inputRef = useRef();
  

  // 통합 이벤트 핸들러
  const onChage = (e) => {
    countRef.current++;
    console.log(countRef.current) // => 데이터를 수정할때마다 추가된다
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = () => {
    if (input.name === '') {
      // 이름을 입력하는 DOM 요소에 포커스
      inputRef.current.focus();
    }

  }


  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChage}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          type="date"
          value={input.birth}
          onChange={onChage}
        />
      </div>
      <div>
        <select
        name="country"
          value={input.country}
          onChange={onChage}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChage}
        />
      </div>

      <button onClick={onSubmit}>제출하기</button>
    </div>
  )
};

export default Register;