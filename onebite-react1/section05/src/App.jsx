import './App.css'
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import Button from './components/Button';

const buttonProps = {
  text: '기타',
  color: 'blue'
}
function App() {
  return (
    <>
      <Button text={'메일'} color={"red"}  />
      <Button text={'카페'} />
      <Button text={'블로그'} />
      <Button {...buttonProps} />
      <Button text={'html'}>
        <div>자식요소</div>
      </Button>
      <Button />
    </>
  )
};

export default App;