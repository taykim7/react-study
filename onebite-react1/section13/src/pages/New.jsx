import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  // 저장하기
  const onSubmit = (input) => {
    // 일기 생성
    onCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    // 뒤로가기(Home) + 뒤로가기 방지
    nav('/', { replace: true });
  };

  return (
    <div>
      <Header title={'새 일기 쓰기'}
      leftChild={
        <Button
          onClick={() => nav(-1)}
          text={'< 뒤로 가기'}
        />
      }
    />

    <Editor onSubmit={onSubmit} />
    </div>
  );
}

export default New;