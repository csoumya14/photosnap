import React from 'react';
import styled from 'styled-components';
import FirstSection from './StoriesFirstSection';
import MiddleSection from './StoriesMiddleSection';
import PhotoSection from './StoriesPhotoSection';
import BottomSection from '../Home/BottomSection';

const Container = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
  }
`;

const StoriesPage = ({ image }) => {
  return (
    <Container>
      <FirstSection />
      <MiddleSection />
      <PhotoSection image={image} />
      <BottomSection />
    </Container>
  );
};

export default StoriesPage;
