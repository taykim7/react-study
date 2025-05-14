import Header from "../components/Header";
import Button from '../components/Button';

const Home = () => {
  return (
  <div>
    <Header title={'2025년 5월'} 
      leftChild={<Button text={'<'} />}
      rightChild={<Button text={'>'} />}
    />
  </div>
);
}

export default Home;