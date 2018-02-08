import React from 'react';

import './GoodsCard.scss';

const GoodsCard = ({ children }) => {
  return (
    <div className='goods-card'>
      { children }
    </div>
  );
};

export default GoodsCard;
