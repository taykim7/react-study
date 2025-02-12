import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');


  useEffect(()=>{console.log('변경됨')}, [count, input]);
  // [count]는 useEffect가 의존하기 때문에 의존성 배열이라고 함
  // dependency array 줄여서 deps

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
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
