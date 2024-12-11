import "./Main.css";

const Main = () => {
  const user = {
    name: '김테이',
    isLogin: true,
  }

  // return (
  //   <>
  //     { user.isLogin ? (<div>로그아웃</div>) : (<div>로그인</div>) }
  //   </>
  // )

  // 조건문 + 스타일
  // if (user.isLogin) {
  //   return <div style={{
  //     backgroundColor: 'red',
  //     borderBottom: '5px solid blue'
  //   }}>로그아웃</div>;
  // } else {
  //   return <div>로그인</div>
  // }

  // css 분리
  // 자바스크립트의 예약어인 class를 사용하지 못하여 className을 통해 지정한다.
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>
  }

}

export default Main;