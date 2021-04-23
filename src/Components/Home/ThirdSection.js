import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/home/mobile/designed-for-everyone.jpg';
import desktopImg from '../../assets/home/desktop/designed-for-everyone.jpg';
import tabScreenImg from '../../assets/home/tablet/designed-for-everyone.jpg';
import TopTextSection from '../TopTextSection';

const SecondSectionContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
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
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1.3fr;
  }
`;
const ImageContainer = styled.div`
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
`;

const ThirdSection = styled.div`
  height: 26.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
    width: 495px;
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    width: 610px;
  }
`;

const SecondMiddleSection = () => {
  const heading = 'Designed For Everyone';
  const paragraph =
    'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all level, brands, businesses you name it.';
  const linkName = 'view the stories';
  const showInviteLink = true;
  const blackBackgroundColor = false;
  return (
    <SecondSectionContainer>
      <ImageContainer>
        <picture className="picture">
          <source media="(min-width:1024px)" srcSet={desktopImg}></source>
          <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
          <img
            src={hero}
            alt=" a woman holding camera during sunset or sunrise"
            className="hero-image"
          ></img>
        </picture>
      </ImageContainer>
      <ThirdSection>
        <TopTextSection
          heading={heading}
          paragraph={paragraph}
          linkName={linkName}
          showInviteLink={showInviteLink}
          blackBackgroundColor={blackBackgroundColor}
        />
      </ThirdSection>
    </SecondSectionContainer>
  );
};

export default SecondMiddleSection;
