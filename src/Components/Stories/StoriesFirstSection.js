import React from 'react';
import styled from 'styled-components';
import moonImg from '../assets/stories/mobile/moon-of-appalacia.jpg';

const FirstSectionContainer = styled.div`
  @media only screen and (max-width: 420px) {
    width=100vw;
  }
`;
const MoonImg = styled.img`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    object-fit: cover;
    height: 19.813rem;
  }
`;

const FirstSection = () => {
  return (
    <FirstSectionContainer>
      <MoonImg src={moonImg} alt="scenery of moon up in the sky behind mountains " />
    </FirstSectionContainer>
  );
};

export default FirstSection;
