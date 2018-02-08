import React from 'react';
import Responsive from 'components/common/Responsive';
import './HomeTemplate.scss';

const HomeTemplate = () => {
  return (
    <div className="home-template">
      <Responsive className="block">
        <div className="left-text">
          <div>
            <h1>Lorem ipsum, dolorya</h1>
            <div className="description">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Nisi, cumque?
              </p>
            </div>
          </div>
        </div>
        <div className="right-form">
          <div className="black-box">
            제 이름은요 어쩌고인데
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
