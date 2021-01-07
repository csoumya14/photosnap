import React from 'react';
import styled from 'styled-components';
import TopSection from './FirstSection';
import MiddleSection from './SecondSection';
import SecondMiddleSection from './ThirdSection';
import PhotoSection from './PhotoCollectionSection';
import CharSection from './CharacteristicsSection';
import BottomSection from './BottomSection';

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
