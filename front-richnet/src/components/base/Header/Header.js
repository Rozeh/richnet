import React from 'react';
import Responsive from 'components/common/Responsive';
import './Header.scss';

const Header = ({ right, userMenu }) => {
  return (
    <header className="base header">
      <Responsive className="header-wrapper">
        <div className="brand">
           Rich.net 
        </div>
        <nav>
          <a className="active" href="/">트렌딩</a>
          <a>구매</a>
          <a>이벤트</a>
          <a>갤러리</a>
          <a>고객센터</a>
          <a>소식방</a>
        </nav>
        <div className="right">
          {right}
          {userMenu}
        </div>
      </Responsive>
    </header>
  );
};

export default Header;
