import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// 커스텀훅 useDiary
// 앞에 접두사 use가 붙는다
// 커스텀훅에서는 useContext, useEffect 등 리액트훅을 자유롭게 호출이 가능ㅎ다ㅏ.
const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate(); 

  useEffect(() => {
    const currentDiaryitem = data.find(
      (item) => String(item.id) === String(id)
    );

    // 미존재시
    if (!currentDiaryitem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', {replace: true});
    }

    // state에 저장
    setCurDiaryItem(currentDiaryitem);
  }, [id]);

  return curDiaryItem;
}

export default useDiary;