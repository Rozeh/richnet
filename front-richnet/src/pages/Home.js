import React from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import HomeTemplate from 'components/templates/HomeTemplate';
import Header from 'components/base/Header';
import GoodsCardContainer from 'containers/home/GoodsCardContainer';

const Home = () => {
  return (
    <PageTemplate header={<Header />}>
      <HomeTemplate card={<GoodsCardContainer />} />
    </PageTemplate>
  );
};

export default Home;
