import React from 'react';
import styled from 'styled-components';
import FirstSection from './StoriesFirstSection';
import PhotoSection from './StoriesPhotoSection';
import BottomSection from './StoriesBottomSection';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
`;

const StoriesPage = ({ image }) => {
  return (
    <Container>
      <FirstSection />
      <PhotoSection image={image} />
      <BottomSection />
    </Container>
  );
};

export default StoriesPage;
