import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);

  // useEffect(()=>{console.log('변경됨')}, [count, input]);
  // [count]는 useEffect가 의존하기 때문에 의존성 배열이라고 함
  // dependency array 줄여서 deps

  // 1. 마운트 : 탄생 <- deps를 빈배열
  useEffect(()=>{
    console.log('mount')
  }, [])

  // 2. 업데이트 : 리렌더링 <- deps를 생략
  useEffect(()=>{
    if(!isMount.current) {
      // 마운트안된상황
      isMount.current = true;
      return;
    }
    console.log('update')
  })

  const onClickButton = (value) => {
    setCount(count+value);
  }
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }}/>
      </section>
      <section>
        <Viewer count={count} />
        { count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
