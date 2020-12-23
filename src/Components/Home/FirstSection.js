import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/shared/desktop/arrow.svg';
import createAndShareImg from '../assets/home/mobile/create-and-share.jpg';
import bigScreenImg from '../assets/home/desktop/create-and-share.jpg';
import { useViewPort } from '../CustomViewPort';

const FirstSectionContainer = styled.div`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    .pink-rectangle {
      position: absolute;
      width: 128px;
      height: 6px;
      left: 33px;
      top: 22.3rem;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: minmax(495px, auto) minmax(273px, auto);
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 650px;
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    height: 650px;
  }
`;
const ImageSection = styled.div`
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    overflow: hidden;
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;
const CreateImg = styled.img`
  @media only screen and (max-width: 420px) {
    object-fit: cover;
    height: 18.375rem;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    object-fit: cover;
    height: 20.375rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    object-fit: contain;
    margin-left: -35vw;
  }
  @media only screen and (min-width: 1024px) {
    object-fit: cover;
  }
`;
const FirstSection = styled.section`
  @media only screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
    height: 26.2rem;
    margin-top: -0.5rem;
    background-color: #000;
    color: white;
    .heading1 {
      margin-top: 5rem;
      margin-left: 2.06rem;
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
      margin-left: 2.06rem;
      margin-top: 1rem;
    }
    .link1 {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-left: 2.06rem;
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
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: 26.2rem;
    margin-top: -0.5rem;
    background-color: #000;
    color: white;
    .heading1 {
      margin-top: 5rem;
      margin-left: 2.06rem;
      width: 12.438em;
      height: 120px;
      font-size: 32px;
      line-height: 2.5rem;
      font-weight: 700;
      letter-spacing: 3.33333px;
      text-transform: uppercase;
    }
    .para1 {
      width: 375px;
      font-size: 15px;
      font-weight: 400;
      opacity: 0.6;
      line-height: 25px;
      margin-left: 2.06rem;
      margin-top: 1rem;
    }
    .link1 {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-left: 2.06rem;
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
      margin-left: 3rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 495px;
    background: #000000;
    color: #ffffff;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  @media only screen and (min-width: 1024px) {
    background: #000000;
    color: #ffffff;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;
const TextSection = styled.div`
  @media only screen and (min-width: 768px) {
    width: 387px;
    height: 304px;
    margin-top: 173px;
    margin-left: 54px;
    margin-right: 54px;
    margin-bottom: 173px;
    .heading1 {
      margin-top: 5rem;

      width: 387px;
      height: 144px;
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      letter-spacing: 4.16667px;
      text-transform: uppercase;
    }
    .para1 {
      width: 387px;
      font-size: 15px;
      font-weight: 400;
      opacity: 0.6;
      line-height: 25px;

      margin-top: 21px;
    }
    .link1 {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-top: 48px;
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
      margin-top: 5px;
      position: absolute;
      margin-left: 1rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
`;

const TopSection = () => {
  const [isSmallScreen] = useViewPort();
  return (
    <FirstSectionContainer>
      <ImageSection>
        {isSmallScreen ? (
          <CreateImg
            src={createAndShareImg}
            alt="image of a man viewing scenery of lake and mountains"
          />
        ) : (
          <CreateImg
            src={bigScreenImg}
            alt="image of a man viewing scenery of lake and mountains"
          />
        )}
      </ImageSection>

      <FirstSection>
        <div className="pink-rectangle"></div>
        <TextSection>
          <h1 className="heading1"> Create and share your photo Stories.</h1>
          <p className="para1">
            Photosnap is a platform for photographers and visual storytellers. We make it easy to
            share photos, tell stories and connect with others.
          </p>
          <a href="#/" className="link1">
            Get an invite{' '}
            <span>
              <img className="arrow-image" src={arrow} alt=""></img>
            </span>
          </a>
        </TextSection>
      </FirstSection>
    </FirstSectionContainer>
  );
};

export default TopSection;
