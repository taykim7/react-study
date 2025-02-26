import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({onCreate}) => {
  const [content, setContent] = useState('');
  
  // focus를 위한 레퍼런스
  const contentRef = useRef();

  // 이벤트 핸들러
  const onChangeContent = (e) => {
    setContent(e.target.value);
  }
  
  // 이벤트 핸들러 (key)
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }

  const onSubmit = () =>{
    // 데이터 검사
    if (content === '') {
      contentRef.current.focus();
      return;
    }

    // 데이터 추가
    onCreate(content);
    
    // 데이터 초기화
    setContent('');
  }

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 TODO ..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;