import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from '../components/Button';
import DiaryList from "../components/DiaryList";
import usePageTitle from '../hooks/usePageTitle';

const getMontylyDate = (pivotDate, data) => {
  // 받아온 날짜의 월초 
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  // 받아온 날짜의 월말 (다음달의 0일로 설정하여 이번달의 마지막으로 설정됨)
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();
  // 받아온 날짜의 같은 달인 데이터만 필터
  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
}
const Home = () => {
  // App.jsx로부터 받아옴
  const data = useContext(DiaryStateContext);

  // 날짜
  const [pivotDate, setPivotDate] = useState(new Date());

  // 타이틀 변경
  usePageTitle('감정 일기장');

  // 해당하는 월의 데이터만 가져오기
  const monthlyData = getMontylyDate(pivotDate, data);

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
    <DiaryList data={monthlyData} />
  </div>
);
}

export default Home;