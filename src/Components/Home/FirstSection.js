import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/home/mobile/create-and-share.jpg';
import desktopImg from '../../assets/home/desktop/create-and-share.jpg';
import tabScreenImg from '../../assets/home/tablet/create-and-share.jpg';
import TopImageSection from '../TopImageSection';
import TopTextSection from '../TopTextSection';
import PinkRectangle from '../PinkRectangle';

const FirstSectionContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) {
    height: 650px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1.3fr;
  }
`;

const FirstSectionText = styled.section`
  background-color: #000000;
  height: 490px;
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
    height: 650px;
  }
`;

const TopSection = () => {
  const altText = 'a woman holding camera during sunset or sunrise';
  const heading = 'Create and share your photo stories.';
  const paragraph =
    'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others';
  const linkName = 'Get an invite';
  const showInviteLink = true;
  const blackBackgroundColor = true;
  return (
    <FirstSectionContainer>
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
          linkName={linkName}
          showInviteLink={showInviteLink}
          blackBackgroundColor={blackBackgroundColor}
        />
      </FirstSectionText>
    </FirstSectionContainer>
  );
};

export default TopSection;
