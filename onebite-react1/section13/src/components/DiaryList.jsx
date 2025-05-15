import './DiaryList.css'
import Button from "./Button";
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({data}) => {
  // 페이지 이동
  const nav = useNavigate();
  // 정렬 스테이트
  const [sortType, setSortType] = useState('latest');
  // 정렬 이벤트핸들러
  const onChageSortType = (e) => {
    setSortType(e.target.value);
  }
  // 정렬 기능
  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if(sortType === 'oldest') {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  }
  const sortedData = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChageSortType}>
          <option value={'latest'}>최신순</option>
          <option value={'oldest'}>오래된 순</option>
        </select>
        <Button onClick={() => nav('/new')} text={'새 일기 쓰기'} type={'POSITIVE'} />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default DiaryList;