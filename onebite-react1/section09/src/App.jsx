import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Exam from './components/Exam'

// state를 이용해야하는 모든 컴포넌트의 조상 => App.jsx
import { useState, useRef } from 'react'

function App() {
  
  const [todos, setTodos] = useState([]);

  // id의 레퍼런스
  const idRef = useRef(0);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    setTodos([newTodo, ...todos]);
  }

  const onUpdate = (targetId) => {
    // todos State의 값들 중에 id가 일치하는 아이템의 isDone을 변경
    setTodos(todos.map((todo)=> 
      todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
    ))
  }

  const onDelete = (targetId) => {
    // todos 배열에서 targetId와 일치하는 아이템만 제거한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className='App'>
      <Exam />
      {/* <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/> */}
    </div>
  )
}

export default App
