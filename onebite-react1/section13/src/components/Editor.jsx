import './Editor.css';
import EmotionItem from './Emotion';

const Editor = () => {
  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>오늘의 날짜</h4>
        <input type='date' />
      </section>
      <section className='emotion_section'>
        <h4>오늘의 감정</h4>
        <div>
          <EmotionItem />
          <EmotionItem />
          <EmotionItem />
          <EmotionItem />
          <EmotionItem />
        </div>
      </section>
      <section className='content_section'></section>
      <section className='button_section'></section>
    </div>
  )
}

export default Editor