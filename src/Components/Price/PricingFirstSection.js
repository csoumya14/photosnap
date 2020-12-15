import React from 'react';
import styled from 'styled-components';
import hero from '../assets/pricing/mobile/hero.jpg';

const SectionContainer = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;

    .hero-image {
      width: 100vw;
      object-fit: cover;
      height: 18.375rem;
    }
    .image-text {
      margin-top: -0.4rem;
      width: 100vw;
      height: 300px;
      display: flex;
      flex-direction: column;
      background: #000000;
    }
    .heading {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 3.333333px;
      text-transform: uppercase;
      margin-top: 72px;
      margin-left: 29px;
      color: #ffffff;
    }
    .para {
      font-size: 15px;
      line-height: 25px;
      width: 318px;
      color: #ffffff;
      opacity: 0.6;
      margin-left: 29px;
    }
  }
`;

const PriceFirstSection = () => {
  return (
    <SectionContainer>
      <img
        src={hero}
        alt=" a woman holding camera during sunset or sunrise"
        className="hero-image"
      />
      <div className="image-text">
        <h1 className="heading">Pricing</h1>
        <p className="para">
          Create a your stories. Photosnap is a platform for photographers and visual storytellers.
          It's the simple way to create and share your photos.
        </p>
      </div>
    </SectionContainer>
  );
};

export default PriceFirstSection;
