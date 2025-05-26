import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

const Diary = () => {
  // 현재 브라우저에 명시한 파라미터를 가져올 수 있음
  const params = useParams();
  
  return <div>
    <Header
      title={'yyyy-mm-dd 기록'}
      leftChild={<Button text={'< 뒤로 가기'}/>}
      rightChild={<Button text={'수정하기'} />}
    />
    <Viewer />
  </div>;
}

export default Diary;