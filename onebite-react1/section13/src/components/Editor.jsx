import './Editor.css';
import EmotionItem from './Emotion';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


// 감정 데이터
const emotionList = [
  {
    emotionId: 1,
    emotionName: '완전좋음'
  },
  {
    emotionId: 2,
    emotionName: '좋음'
  },
  {
    emotionId: 3,
    emotionName: '그럭저럭'
  },
  {
    emotionId: 4,
    emotionName: '나쁨'
  },
  {
    emotionId: 5,
    emotionName: '완전나쁨'
  },
];

const getStringedDate = (targetDate) => {
  // 날짜를 yyyy-mm-dd 로 변환한다
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth()+1;
  let date = targetDate.getDate();
  
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
}

const Editor = ({ onSubmit, initData }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const nav = useNavigate();

  // 데이터가 변경될때마다 init
  useEffect(() => {
    if(initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate))
      })
    }
  }, [initData]);

  // 이벤트핸들로
  const onChangeInput = (e) => {
    // 어떤 요소
    let name = e.target.name;
    // 입력된 값
    let value = e.target.value;
    
    // value값을 Date로 변환
    if (name === 'createdDate') {
      value = new Date(value);
    }

    // state 변경
    setInput({
      ...input,
      [name]: value,
    })
  }

  const onClickSubmitButton = () => {
    // 부모로부터 props로 제공받은 저장하기
    onSubmit(input);
  }

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input
          name='createdDate'
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type='date'
        />
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item) => (
            <EmotionItem 
              onClick={() =>
                onChangeInput({
                  target: {
                    name: 'emotionId',
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={ item.emotionId === input.emotionId }
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>오늘의 일기</h4>
        <textarea
          name='content'
          value={input.content}
          onChange={onChangeInput}
          placeholder='오늘은 어땠나요?'
        />
      </section>
      <section className='button_section'>
        <Button
          onClick={() => nav(-1)}
          text={'취소하기'}
        />
        <Button
          onClick={onClickSubmitButton}
          text={'작성완료'}
          type={'POSITIVE'}
        />
      </section>
    </div>
  )
}

export default Editor