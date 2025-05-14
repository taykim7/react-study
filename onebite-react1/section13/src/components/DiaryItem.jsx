import { getEmotionImage } from '../util/get-emotion-image'
import Button from './Button';
import './DiaryItem.css'

const DiaryItem = () => {

  // 동적으로 이모지 배경화면 설정하기 위함
  const emotinoId = 1;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotinoId}`}>
        <img src={getEmotionImage(emotinoId)} />
      </div>
      <div className="info_section">
        <div className='created_date'>
          {new Date().toLocaleDateString()}
        </div>
        <div className='content'>
          일기 컨텐츠
        </div>
      </div>
      <div className="button_section">
        <Button text={'수정하기'} />
      </div>
    </div>
  );
};

export default DiaryItem;