import React from 'react';
import styled from 'styled-components';
import betaImage from '../assets/shared/mobile/bg-beta.jpg';
import desktopBeta from '../assets/shared/desktop/bg-beta.jpg';
import tabBeta from '../assets/shared/tablet/bg-beta.jpg';
import BetaSectionImage from './BetaSectionImage';
import BetaSectionText from './BetaSectionText';

const Container = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    height: 18rem;
    margin-top: 6.6875rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    height: 280px;
    max-width: 100%;
    margin-top: 112px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    height: 280px;
    max-width: 100%;
    margin-top: 112px;
  }
`;

const Beta = () => {
  return (
    <Container>
      <BetaSectionImage desktopBeta={desktopBeta} tabBeta={tabBeta} betaImage={betaImage} />
      <BetaSectionText />
    </Container>
  );
};

export default Beta;
