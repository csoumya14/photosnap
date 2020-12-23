import React from 'react';
import styled from 'styled-components';
import arrow from '../assets/shared/desktop/arrow.svg';
import betaImage from '../assets/shared/mobile/bg-beta.jpg';

const Container = styled.section`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
    height: 18rem;
    margin-top: 5.031rem;

    background-image: url(${betaImage});
    background-size: cover;
    display: flex;
    flex-direction: column;
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
      line-height: 2.5rem;
      width: 19.375rem;
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
    height: 25rem;
    margin-top: 8.031rem;

    background-image: url(${betaImage});
    background-size: cover;
    display: flex;
    flex-direction: column;
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
      line-height: 2.5rem;
      width: 19.375rem;
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
`;

const Beta = () => {
  return (
    <Container>
      <div className="pink-rectangle"></div>
      <h1 className="heading">We're in beta. Get your invite today!</h1>
      <a href="#/" className="link">
        Get an invite{' '}
        <span>
          <img className="arrow-image" src={arrow} alt=""></img>
        </span>
      </a>
    </Container>
  );
};

export default Beta;
