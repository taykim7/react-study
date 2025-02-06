import { useState } from "react";

// 커스텀 훅 (이름 앞에 use를 사용하면 된다)
function useInput() {
  const [input, setInput] = useState('');
  const onChange = (e) => {
    setInput(e.target.value);
  }
  return [input, onChange];
}

export default useInput;