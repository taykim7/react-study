import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

// state를 이용해야하는 모든 컴포넌트의 조상 => App.jsx
import { useState } from 'react'

// 임시데이터
const mockData = [
  {
    id: 0,
    isDone: false,
    content: '공부좀하자',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '살빼라',
    date: new Date().getTime(),
  }
];

function App() {
  
  const [todos, setTodos] = useState(mockData);

  return (
    <div className='App'>
      <Header/>
      <Editor/>
      <List/>
    </div>
  )
}

export default App
