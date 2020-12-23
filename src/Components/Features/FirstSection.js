import React from 'react';
import styled from 'styled-components';
import hero from '../assets/features/mobile/hero.jpg';

const SectionContainer = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    .pink-rectangle {
      position: absolute;
      width: 128px;
      height: 6px;
      left: 29px;
      margin-top: -0.4rem;
      background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    max-width: 100%;
  }
`;

const HeroImg = styled.img`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 18.375rem;
    object-fit: content;
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 25.375rem;
    object-fit: cover;
  }
`;

const TextSection = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    height: 18.75rem;
    background: #000000;
    margin-top: -0.4rem;
    display: flex;
    flex-direction: column;
    .heading {
      text-transform: uppercase;
      color: #ffffff;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.208rem;
      margin-left: 1.813rem;
      margin-top: 4.5rem;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      width: 19.875rem;
      height: 6.25rem;
      margin-left: 1.813rem;
      color: #ffffff;
      opacity: 0.6;
      margin-top: 0rem;
    }
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    width: 100vw;
    height: 18.75rem;
    background: #000000;
    margin-top: -0.4rem;
    display: flex;
    flex-direction: column;
    .heading {
      text-transform: uppercase;
      color: #ffffff;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.208rem;
      margin-left: 1.813rem;
      margin-top: 4.5rem;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      width: 19.875rem;
      height: 6.25rem;
      margin-left: 1.813rem;
      color: #ffffff;
      opacity: 0.6;
      margin-top: 0rem;
    }
  }
`;

const FeatureFirstSection = () => {
  return (
    <SectionContainer>
      <HeroImg src={hero} alt="image of a man holding camera" />
      <div className="pink-rectangle"></div>
      <TextSection>
        <h1 className="heading">Features</h1>
        <p className="para">
          We make sure all of our features are designed to be loved by every aspiring and even
          professional photographers who wanted to share their stories.
        </p>
      </TextSection>
    </SectionContainer>
  );
};

export default FeatureFirstSection;
