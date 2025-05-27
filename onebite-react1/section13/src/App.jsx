import './App.css'
import { useReducer, useRef, createContext, useEffect, act, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import Edit from './pages/Edit'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
// 4. "/edit" : 일기를 수정하는 Edit 페이지

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date('2025-05-15').getTime(),
//     emotionId: 1,
//     content: '1번 일기의 내용'
//   },
//   {
//     id: 2,
//     createdDate: new Date('2025-05-14').getTime(),
//     emotionId: 2,
//     content: '2번 일기의 내용'
//   },
//   {
//     id: 3,
//     createdDate: new Date('2025-04-15').getTime(),
//     emotionId: 3,
//     content: '3번 일기의 내용'
//   },
// ]

function reducer(state, action) {
  // state를 저장할 변수
  let nextState;

  switch(action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      // return [action.data, ...state]
      nextState = [action.data, ...state];
      break;
    case 'UPDATE':
      // return state.map((item) => 
      //   String(item.id) === String(action.data.id)
      //     ? action.data
      //     : item
      // );
      nextState = state.map((item) => 
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
      break;
    case 'DELETE':
      // return state.filter((item) => 
      //   String(item.id) !== String(action.id)
      // );
      nextState = state.filter((item) => 
        String(item.id) !== String(action.id)
      );
      break;
    default:
      return state;
  }
  // 로컬스토리지에 저장
  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  // 로딩
  const [isLoading, setIsLoading] = useState(true);

  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(()=>{
    const storedDate = localStorage.getItem('diary');
    if (!storedDate) return;
    const parsedDate = JSON.parse(storedDate);

    if (!Array.isArray(parsedDate)) {
      // 로딩 끝
      setIsLoading(false);
      return;
    }

    // 가장 id 가 높은 값을 찾아야함
    let maxId = 0;
    parsedDate.forEach(item => {
      if(Number(item.id) > maxId) {
        maxId = Number(item.id);
      };
    });

    idRef.current = maxId + 1;

    dispatch({
      type: 'INIT',
      data: parsedDate,
    });
    // 로딩 끝
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    })
  }

  // 로딩 중
  if (isLoading) {
    return <div>데이터 로딩 중</div>
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
