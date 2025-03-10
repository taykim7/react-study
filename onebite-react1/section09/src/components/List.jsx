import './List.css'
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({todos, onUpdate, onDelete}) => {

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

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
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
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          )
        })}
      </div>
    </div>
  )
}

export default List;