import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/pricing/mobile/hero.jpg';
import tabScreenImg from '../../assets/pricing/tablet/hero.jpg';
import desktopImg from '../../assets/pricing/desktop/hero.jpg';
import TopImageSection from '../TopImageSection';
import TopTextSection from '../TopTextSection';
import PinkRectangle from '../PinkRectangle';

const SectionContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 421px) {
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 0.9fr 1.1fr;
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

const PriceFirstSection = () => {
  const altText = 'a woman holding camera during sunset or sunrise';
  const heading = 'Pricing';
  const paragraph =
    "Create a your stories. Photosnap is a platform for photographers and visual storytellers.It's the simple way to create and share your photos.";
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

export default PriceFirstSection;
