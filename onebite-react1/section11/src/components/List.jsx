import './List.css'
import TodoItem from './TodoItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => {

  const todos = useContext(TodoStateContext);

  // 검색어 state
  const [search, setSearch] = useState('');

  // change 이벤트 핸들러 - change시 검색어 저장
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색어 필터 - 공백일땐 전체, 검색어가 있을땐 소문자 변환 후 필터
  const getFilteredData = () => {
    if(search === '') {
      return todos;
    }
    return todos.filter((todo) =>
      // 모두 소문자로 변환하여 비교한다.
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  // 필터된 데이터들
  const filteredTodos = getFilteredData();

  // todos의 양이 길어질 수록 오래걸림
  // const getAnalyzedData = () => {
  //   console.log('데이터 호출');
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo)=>todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   }
  // }

  // const {totalCount, doneCount, notDoneCount } = getAnalyzedData()

  const {totalCount, doneCount, notDoneCount } = useMemo(()=>{
    console.log('데이터 호출');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  },[todos])
  // 의존성배열 : deps
  // deps에 포함된 값이 변경되야 콜백함수를 다시 실행함.

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className='todos_wrapper'>
        {filteredTodos.map((todo)=>{
          return (
            <TodoItem
              key={todo.id}
              {...todo}
            />
          )
        })}
      </div>
    </div>
  )
}

export default List;