import React from 'react';
import styled from 'styled-components';
import FirstSection from '../../components/Stories/StoriesFirstSection';
import PhotoSection from '../../components/Stories/StoriesPhotoSection';
import BottomSection from '../../components/Stories/StoriesBottomSection';

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
