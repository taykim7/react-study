import { useState } from "react";

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

  // 통합 이벤트 핸들러
  const onChage = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>
      <div>
        <input
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
    </div>
  )
};

export default Register;