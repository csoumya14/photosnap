import React from 'react';
import styled from 'styled-components';

import hero from '../../assets/home/mobile/create-and-share.jpg';
import desktopImg from '../../assets/home/desktop/create-and-share.jpg';
import tabScreenImg from '../../assets/home/tablet/create-and-share.jpg';
import TopImageSection from '../TopImageSection';
import GetAnInvite from '../GetAnInviteLink';
import PinkRectangle from '../PinkRectangle';

const FirstSectionContainer = styled.div`
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
    height: 650px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr;
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

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 1/2;
    height: 490px;
    overflow: hidden;
    background-color: #000000;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0px;
    background: #000000;
    color: #ffffff;
    height: 650px;
    grid-row: 1/2;
    grid-column: 1/2;
  }
`;
const TextSection = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  .heading1 {
    margin-top: 5rem;
    width: calc(100% - 70px);
    height: 120px;
    font-size: 32px;
    line-height: 2.5rem;
    font-weight: 700;
    letter-spacing: 3.33333px;
    text-transform: uppercase;
  }
  .para1 {
    width: calc(100% - 70px);
    font-size: 15px;
    font-weight: 400;
    opacity: 0.6;
    line-height: 25px;

    margin-top: 1rem;
  }
  .link1 {
    text-decoration: none;
    width: calc(100% - 70px);
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    height: 1rem;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .arrow-image {
    width: 2.63rem;
    margin-top: 0.1rem;
    position: absolute;
    margin-left: 1rem;
    height: 0.75rem;
    filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .para1 {
      margin-top: 2rem;
    }
    .arrow-image {
      margin-left: 1rem;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 387px;
    height: 304px;
    margin-top: 80px;
    margin-left: 44px;
    margin-right: 54px;
    margin-bottom: 173px;

    .heading1 {
      margin-top: 6rem;
      width: 387px;
      height: 144px;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: 4.16667px;
    }
    .para1 {
      width: 387px;
      margin-top: 0rem;
    }

    .link1 {
      width: 387px;
      margin-top: 25px;
    }

    .arrow-image {
      margin-top: 5px;
    }
  }
`;

const TopSection = () => {
  const altText = 'a woman holding camera during sunset or sunrise';
  const heading = 'Create and share your photo stories.';
  const paragraph =
    'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others';
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
        <TextSection>
          <h1 className="heading1">{heading}</h1>
          <p className="para1">{paragraph}</p>
          <GetAnInvite />
        </TextSection>
      </FirstSectionText>
    </FirstSectionContainer>
  );
};

export default TopSection;
