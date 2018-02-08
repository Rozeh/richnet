import React from 'react';
import Responsive from 'components/common/Responsive';
import './HomeTemplate.scss';

const HomeTemplate = ({card}) => {
  return (
    <div className="home-template">
      <Responsive className="block">
        <div className="left-text">
          <div>
            <h2>신의 선물 열대열매</h2>
            <h1>깔라만시!</h1>
            <div className="description">
              <p>천연알갱이를 꼭 확인하세요</p>
              <p><br />
              </p>
            </div>
          </div>
        </div>
        <div className="right-form">
          <div className="black-box">
            {card}
          </div>
          <div className="register-button">
            지금 시작하기
          </div>
        </div>
      </Responsive>
    </div>
  );
};


export default HomeTemplate;
