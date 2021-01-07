import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/shared/desktop/arrow.svg';
import betaImage from '../assets/shared/mobile/bg-beta.jpg';
import desktopBeta from '../assets/shared/desktop/bg-beta.jpg';
import tabBeta from '../assets/shared/tablet/bg-beta.jpg';

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
const TextSection = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    height: 18rem;
    border: 1px solid transparent;
    .pink-rectangle {
      width: 128px;
      height: 6px;
      left: 33px;
      position: absolute;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
    .heading {
      color: #ffffff;
      font-size: 32px;
      width: 19.375rem;
      line-height: 2.5rem;
      letter-spacing: 0.208rem;
      text-transform: uppercase;
      margin-top: 4rem;
      margin-left: 2.0625rem;
    }
    .link {
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
      margin-top: 0.3rem;
      position: absolute;
      margin-left: 1rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
    height: 17.5rem;
    margin-top: 6.6875rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid transparent;
    .pink-rectangle {
      width: 6px;
      height: 280px;
      margin-left: 0px;
      position: absolute;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
    .heading {
      color: #ffffff;
      font-size: 32px;
      width: 19.375rem;
      line-height: 2.5rem;
      letter-spacing: 0.208rem;
      text-transform: uppercase;
      align-self: center;
      margin-left: 2.0625rem;
    }
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-right: 5rem;
      line-height: 16px;
      letter-spacing: 2px;
      align-self: center;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
    .arrow-image {
      width: 2.63rem;
      margin-top: 0.3rem;

      position: absolute;
      margin-left: 1rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    height: 280px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .pink-rectangle {
      width: 6px;
      height: 280px;
      margin-left: 0px;
      position: absolute;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
    .heading {
      color: #ffffff;
      font-size: 40px;
      width: 400px;
      line-height: 48px;
      letter-spacing: 4.16667px;
      text-transform: uppercase;
      align-self: center;
      margin-left: 38px;
    }
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      margin-right: 6rem;
      line-height: 16px;
      letter-spacing: 2px;
      align-self: center;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
    .arrow-image {
      width: 2.63rem;
      margin-top: 0.3rem;
      position: absolute;
      margin-left: 1rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    height: 280px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .pink-rectangle {
      width: 6px;
      height: 280px;
      margin-left: 0px;
      position: absolute;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
    .heading {
      color: #ffffff;
      font-size: 40px;
      width: 400px;

      line-height: 48px;
      letter-spacing: 4.16667px;
      text-transform: uppercase;
      align-self: center;

      margin-left: 165px;
    }
    .link {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;

      line-height: 16px;
      letter-spacing: 2px;
      align-self: center;

      width: 300px;
      height: 1rem;
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
    .arrow-image {
      width: 2.63rem;
      margin-top: 0.3rem;
      position: absolute;
      margin-left: 1rem;
      height: 0.75rem;
      filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
    }
  }
`;
const ImageSection = styled.div`
  z-index: -1;
  position: absolute;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    overflow: hidden;
    max-width: 100%;
    height: 480px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
    overflow: hidden;
    max-width: 100%;
    height: 280px;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    overflow: hidden;
    max-width: 100%;
    height: 280px;
  }
`;

const Beta = () => {
  return (
    <Container>
      <ImageSection>
        <picture className="picture">
          <source media="(min-width:800px)" srcSet={desktopBeta}></source>
          <source media="(min-width:500px)" className="source" srcSet={tabBeta}></source>
          <img src={betaImage} alt=" a man holding camera"></img>
        </picture>
      </ImageSection>
      <TextSection>
        <div className="pink-rectangle"></div>
        <h1 className="heading">We're in beta. Get your invite today!</h1>
        <a href="#/" className="link">
          Get an invite{' '}
          <span>
            <img className="arrow-image" src={arrow} alt=""></img>
          </span>
        </a>
      </TextSection>
    </Container>
  );
};

export default Beta;
