import { useParams } from "react-router-dom";

const Diary = () => {
  // 현재 브라우저에 명시한 파라미터를 가져올 수 있음
  const params = useParams();
  return <div>{params.id}번 Diary</div>;
}

export default Diary;