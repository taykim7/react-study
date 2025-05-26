import { useParams, useNavigate } from "react-router-dom";
import { getStringedDate } from '../util/get-stringed-date';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from "../hooks/useDiary";

const Diary = () => {
  // 현재 브라우저에 명시한 파라미터를 가져올 수 있음
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);
  if(!curDiaryItem) {
    return <div>데이터 로딩중</div>
  }
  
  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return <div>
    <Header
      title={`${title} 기록`}
      leftChild={<Button onClick={()=>nav(-1)} text={'< 뒤로 가기'}/>}
      rightChild={<Button onClick={()=>nav(`/edit/${params.id}`)} text={'수정하기'} />}
    />
    <Viewer emotionId={emotionId} content={content}/>
  </div>;
}

export default Diary;