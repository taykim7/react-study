import './TodoItem.css'
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, date}) => {
const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () =>{
    onDelete(id);
  }

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        type="checkbox"
        checked={isDone}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}

// export default memo(TodoItem); ==> 최적화 실패

// memo 메서드는 현재와 과거를 얕은 비교를 하기 때문에
// 함수와 같은 객체타입은 무조건 다르다고 판단을 함.
// 즉, 객체타입을 props로 받는 컴포넌트는 memo도 최적화가 안됨
// 방법1. props로 보내는 함수들을 메모이제이션한다. ==> useCallback활용
// 방법2. memo함수에 두번째 인수로 콜백함수를 전달하여 최적화기능을 커스텀한다.
// export default memo(TodoItem, (prevProps, nextProps)=>{
//   // 반환값에 따라, Props가 바뀌었는지 판단
//   // true일땐 props가 바뀌지 않음
//   // false일땐 props가 바뀐 것

//   // id, isDone, content, date가 다를때만 리렌더링
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);