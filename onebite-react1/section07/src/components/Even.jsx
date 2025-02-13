import { useEffect } from "react";

const Even = () => {
  // 3. 언마운트 : 죽음
  useEffect(()=> {
    // 클린업, 정리함수 -> useEffect에 콜백함수가 반환하는 함수. useEffect가 끝날때 실행된다.
    return () => {
      console.log('unmount')
    };
  }, [])
  return <div>짝수입니다</div>;
}

export default Even;