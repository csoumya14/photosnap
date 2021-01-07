import React from 'react';
import styled from 'styled-components';
import FeatureFirstSection from './FirstSection';
import MiddleSection from './FeaturesMiddleSection';
import Beta from './BetaSection';
import BottomSection from './BottomSection';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
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
