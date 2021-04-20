import React from 'react';
import styled from 'styled-components';
import FeatureFirstSection from '../../components/Features/FirstSection';
import MiddleSection from '../../components/Features/FeaturesMiddleSection';
import Beta from '../../components/BetaSection';
//import BottomSection from '../../components/Features/BottomSection';
import BottomSection from '../../components/Home/BottomSection';

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
