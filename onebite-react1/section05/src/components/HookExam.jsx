import useInput from "../hooks/useInput";

// 3가지 Hook 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출이 가능하다.
// 2. 조건부로 호출될 수 없다.
// 3. Custom Hook 을 직접 만들 수 있따.



const HookExam = () => {
  // 1. 일일이 입력하기에 번거로움
  // const [input, setInput] = useState('');
  // const onChange = (e) => {
  //   setInput(e.target.value);
  // }
  // 2. 커스텀 훅을 활용
  const [input, onChange] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange}></input>
    </div>
  )
}
export default HookExam;