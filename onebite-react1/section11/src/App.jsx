import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

// state를 이용해야하는 모든 컴포넌트의 조상 => App.jsx
import { useState, useRef, useReducer, useCallback, createContext } from 'react'

const mockData = [
  // {
  //   id: 0,
  //   isDone: false,
  //   content: '예시1',
  //   date: new Date().getTime()
  // },
  // {
  //   id: 1,
  //   isDone: false,
  //   content: '예시2',
  //   date: new Date().getTime()
  // },
  // {
  //   id: 2,
  //   isDone: false,
  //   content: '예시3',
  //   date: new Date().getTime()
  // },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': return [action.data, ...state];
    case 'UPDATE': return state.map((item) =>
      // todos State의 값들 중에 id가 일치하는 아이템의 isDone을 변경
      item.id === action.targetId
      ? {...item, isDone: !item.isDone}
      : item
    );
    case 'DELETE': return state.filter((item) =>
      // todos 배열에서 targetId와 일치하는 아이템만 제거한 새로운 배열
      item.id !== action.targetId
    );
    default:
      return state;
  }
}

// context는 주로 외부에서 선언한다.
// - App 내부에 하게되면 계속 새로운 context를 생성하게됨.
export const TodoContext = createContext();

function App() {
  
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(reducer, mockData);

  // id의 레퍼런스
  const idRef = useRef(0);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    })
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    })
  }, []);

  return (
    <div className='App'>
      <Header/>
      <TodoContext.Provider value={{
        todos,
        onCreate,
        onUpdate,
        onDelete,
      }}>
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  )
}

export default App
