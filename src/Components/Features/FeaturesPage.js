import React from 'react';
import styled from 'styled-components';
import FeatureFirstSection from './FirstSection';
import MiddleSection from './FeaturesMiddleSection';
import Beta from './BetaSection';
import BottomSection from './BottomSection';

const Container = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
  }
`;

const FeaturesPage = ({ feature }) => {
  return (
    <Container>
      <FeatureFirstSection />
      <MiddleSection feature={feature} />
      <Beta />
      <BottomSection />
    </Container>
  );
};

export default FeaturesPage;
