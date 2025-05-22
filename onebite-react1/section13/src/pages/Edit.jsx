import { useParams, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  // 삭제, 수정 메서드 공급받기 
  const {onDelete, onUpdate} = useContext(DiaryDispatchContext);

  // 저장된 데이터 공급받기
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState(); 

  // 아이디에 해당하는 데이터 찾기 (마운트된 이후 or id or data가 변경되면 실행)
  useEffect(() => {
    const currentDiaryitem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    // 미존재시
    if (!currentDiaryitem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', {replace: true});
    }
    // state에 저장
    setCurDiaryItem(currentDiaryitem);
  // }, [params.id, data]); // ⚠️ 리액트 라우트 업데이트로 인한 의존성 배열에서 제거
  }, [params.id]);

  // 이벤트핸들러
  const onClickDelete = () => {
    // 삭제 확인
    if (
      window.confirm('일기를 정말 삭제할까요?')
    ) {
      // 일기 삭제
      onDelete(params.id);
      nav('/', { replace: true });
      
      // ⚠️ 2024.11.22 리액트 라우트 업데이트로 인해 오류!
      // 일기 삭제 후 '존재하지 않는 일기입니다.' alert 발생!
      // 기존에는 navigate 함수가 동기적이었으나,
      // 업데이트 후에는 비동기적이라 페이지 이동 중에도 기존 리액트 훅이나 이펙트들이 동작함.
      // 따라서 일기 삭제 후 'data' state가 변경되어 useEffect가 다시 실행함.
      // 그 시점에는 currentDiaryitem 가 존재하지 않기 때문!
    }
  };

  // // 아이디에 해당하는 데이터 찾기
  // const getCurrentDiaryItem = () => {
  //   const currentDiaryitem = data.find((item) => String(item.id) === String(params.id));
  //   // 미존재시
  //   if (!currentDiaryitem) {
  //     window.alert('존재하지 않는 일기입니다.');
  //     // nav('/', {replace: true});
  //   }
  //   return currentDiaryitem;
  // }
  // 로드될때마다 가져오기
  // const currentDiaryitem = getCurrentDiaryItem();
  // ==> 컴포넌트가 완전히 마운트되기 전이라 nav 후 에러발생!

  // 일기 저장
  const onSubmit = (input) => {
    if (
      window.confirm('일기를 정말 수정할까요?') 
    ) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav('/', {replace: true});
    }
  };

  return (
    <div>
      <Header
        title={'일기 수정하기'}
        leftChild={
          <Button
            onClick={() => nav(-1)}
            text={'< 뒤로 가기'}
          />
        }
        rightChild={
          <Button
            onClick={onClickDelete}
            text={'삭제하기'}
            type="NEGATIVE"
          />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
  );
};

export default Edit;