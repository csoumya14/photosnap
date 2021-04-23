import React from 'react';
import styled from 'styled-components';
import tabScreenImg from '../../assets/features/tablet/hero.jpg';
import desktopImg from '../../assets/features/desktop/hero.jpg';
import hero from '../../assets/features/mobile/hero.jpg';
import TopImageSection from '../TopImageSection';
import TopTextSection from '../TopTextSection';
import PinkRectangle from '../PinkRectangle';

const SectionContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) {
    height: 490px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1.8fr 1fr;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 0.8fr 1fr;
  }
`;
const FirstSectionText = styled.section`
  background-color: #000000;
  height: 300px;
  margin-top: -5.5px;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  @media only screen and (min-width: 421px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 1/2;
    height: 490px;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

const FeatureFirstSection = () => {
  const altText = 'a man holding camera';
  const heading = 'Features';
  const paragraph =
    'We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories';
  const showInviteLink = false;
  const blackBackgroundColor = true;
  return (
    <SectionContainer>
      <TopImageSection
        hero={hero}
        desktopImg={desktopImg}
        tabScreenImg={tabScreenImg}
        altText={altText}
      />
      <FirstSectionText>
        <PinkRectangle />
        <TopTextSection
          heading={heading}
          paragraph={paragraph}
          showInviteLink={showInviteLink}
          blackBackgroundColor={blackBackgroundColor}
        />
      </FirstSectionText>
    </SectionContainer>
  );
};

export default FeatureFirstSection;
