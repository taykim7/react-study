import { useState } from "react";

import Header from "../components/Header";
import Button from '../components/Button';
import DiaryList from "../components/DiaryList";

const Home = () => {
  // 날짜
  const [pivotDate, setPivotDate] = useState(new Date());
  // 다음 달
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  // 이전 달
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
  <div>
    <Header
      title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`} 
      leftChild={<Button onClick={onDecreaseMonth} text={'<'} />}
      rightChild={<Button onClick={onIncreaseMonth} text={'>'} />}
    />
    <DiaryList />
  </div>
);
}

export default Home;