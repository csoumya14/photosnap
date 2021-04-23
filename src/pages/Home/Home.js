import React from 'react';
import styled from 'styled-components';
import TopSection from '../../components/Home/FirstSection';
import MiddleSection from '../../components/Home/SecondSection';
import SecondMiddleSection from '../../components/Home/ThirdSection';
import PhotoSection from '../../components/Home/PhotoCollectionSection';
import CharSection from '../../components/Home/CharacteristicsSection';
import BottomSection from '../../components/BottomSection';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    max-width: 100%;
  }
`;

const MainPage = ({ image, feature }) => {
  return (
    <Container>
      <TopSection />
      <MiddleSection />
      <SecondMiddleSection />
      <PhotoSection image={image} />
      <CharSection feature={feature} />
      <BottomSection />
    </Container>
  );
};

export default MainPage;
