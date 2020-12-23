import React from 'react';
import styled from 'styled-components';
import TopSection from './FirstSection';
import MiddleSection from './SecondSection';
import SecondMiddleSection from './ThirdSection';
import PhotoSection from './PhotoCollectionSection';
import CharSection from './CharacteristicsSection';
import BottomSection from './BottomSection';

const Container = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    min-width: 100%;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    min-width: 100%;
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
