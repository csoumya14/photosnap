import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/home/mobile/beautiful-stories.jpg';
import desktopImg from '../../assets/home/desktop/beautiful-stories.jpg';
import tabScreenImg from '../../assets/home/tablet/beautiful-stories.jpg';
import TopTextSection from '../TopTextSection';

const SecondSectionContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 490px;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: '. .';
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 600px;
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1.3fr 1fr;
  }
`;
const ImageSection = styled.div`
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    grid-row: 1/2;
    grid-column: 1/2;
    overflow: hidden;
    width: 273px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100%;
  }
`;

const SecondSection = styled.section`
  height: 26.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    width: 495px;
    height: 600px;
    grid-row: 1/2;
    grid-column: 2/3;
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
    width: 610px;
  }
`;

const MiddleSection = () => {
  const heading = 'Beautiful Stories every time';
  const paragraph =
    ' We provide design templates to ensure your stories look terrific. Easily add photos,text, embed maps and media from other networks. Then share your story with everyone.';
  const linkName = 'view the stories';
  const showInviteLink = true;
  const blackBackgroundColor = false;
  return (
    <SecondSectionContainer>
      <ImageSection>
        <picture className="picture">
          <source media="(min-width:1024px)" srcSet={desktopImg}></source>
          <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
          <img
            src={hero}
            alt=" a woman holding camera during sunset or sunrise"
            className="hero-image"
          ></img>
        </picture>
      </ImageSection>
      <SecondSection>
        <TopTextSection
          heading={heading}
          paragraph={paragraph}
          linkName={linkName}
          showInviteLink={showInviteLink}
          blackBackgroundColor={blackBackgroundColor}
        />
      </SecondSection>
    </SecondSectionContainer>
  );
};

export default MiddleSection;
