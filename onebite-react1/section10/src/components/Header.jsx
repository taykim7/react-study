import './Header.css';
import { memo } from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 😉</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

// memo를 통한 불필요한 리렌더링 방지
export default memo(Header);