import './App.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import Button from './components/Button'
import Header from './components/Header'

import { getEmotionImage } from './util/get-emotion-image'

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav('new');
  }
  return (
    <>
      <Header
        title={'헤더'}
        leftChild={<Button text={'왼쪽'}/>}
        rightChild={<Button text={'오른쪽'}/>}
      />
      <Button
        text={'DEFAULT'}
        onClick={()=>{
        console.log('누름')
      }}/>
      <Button
        text={'POSITIVE'}
        type={"POSITIVE"}
        onClick={()=>{
        console.log('누름')
      }}/>
      <Button
        text={'NEGATIVE'}
        type={"NEGATIVE"}
        onClick={()=>{
        console.log('누름')
      }}/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
