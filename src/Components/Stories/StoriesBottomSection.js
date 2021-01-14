import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/shared/desktop/logo.svg';
import facebookLogo from '../assets/shared/desktop/facebook.svg';
import youtubeLogo from '../assets/shared/desktop/youtube.svg';
import twitterLogo from '../assets/shared/desktop/twitter.svg';
import pinterestLogo from '../assets/shared/desktop/pinterest.svg';
import instaLogo from '../assets/shared/desktop/instagram.svg';
import arrow from '../assets/shared/desktop/arrow.svg';

const BottomContainer = styled.section`
  width: 100vw;
  max-width: 100%;
  height: 33.688rem;
  margin-top: 0rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  background: #000000;
  .invite-link {
    margin-top: 7.438rem;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 15.62px;
    letter-spacing: 2px;
    align-self: flex-start;
    margin-left: 6.375rem;
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
    margin-left: 1.375rem;
    height: 0.75rem;
    filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
  }
  .copyrightInfo {
    color: #fff;
    font-size: 15px;
    width: 15.938rem;
    opacity: 50.25%;
    margin-top: 2.125rem;
    margin-bottom: 3.5rem;
  }

  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .invite-link {
      margin-left: 13.375rem;
    }
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    height: 284px;
    margin-top: 0px;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr 1.5fr 1fr;
    .invite-link {
      margin-top: 64px;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .copyrightInfo {
      grid-row-start: 3;
      grid-row-end: 4;
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
  @media only screen and (min-width: 1024px) {
    display: grid;
    height: 250px;
    grid-template-columns: 1fr 2fr 1.9fr;
    grid-template-rows: 1fr 1fr;
    .invite-link {
      height: 1rem;
      grid-row-start: 1;
      grid-row-end: 2;
      grid-column-start: 3;
      grid-column-end: 4;
    }
    .copyrightInfo {
      grid-row-start: 2;
      grid-row-end: 3;
      grid-column-start: 3;
      grid-column-end: 4;
      margin-top: -10px;
    }
  }
`;
const LogoImg = styled.img`
  filter: invert(1);
  object-fit: cover;
  margin-top: 3.5rem;
  width: 10.625rem;
  height: 1 rem;
  @media only screen and (min-width: 768px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: 4rem;
    margin-left: 39px;
    width: 170px;
  }
  @media only screen and (min-width: 1024px) {
    align-self: start;
    justify-self: end;
  }
`;

const SocialIconContainer = styled.div`
  width: 9.625rem;
  height: 1.25rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .logo-image {
    filter: sepia(100%) grayscale(100%) brightness(20);
  }
  .logo-image:hover {
    filter: none;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-bottom: 65px;
    margin-left: 39px;
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: -20px;
    align-self: start;
    justify-self: end;
  }
`;

const LinkContainer = styled.div`
  width: 19.375rem;
  height: 7.563rem;
  margin-top: 3.063rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .link {
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 15.62px;
    letter-spacing: 2px;
    height: 1rem;
    &:hover,
    &:focus {
      text-decoration: underline;
      opacity: 0.3;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    flex-direction: row;
    width: 315px;
    height: 0px;
    margin-left: 39px;
    padding: 0px;

    .link {
      height: 4rem;
    }
  }
  @media only screen and (min-width: 1024px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    flex-direction: column;
    margin-top: 4rem;
  }
`;

const BottomSection = () => {
  return (
    <BottomContainer>
      <LogoImg src={logo} alt="" />
      <SocialIconContainer>
        <a href="/#">
          <img className="logo-image" src={facebookLogo} alt="facebook logo" />
        </a>
        <a href="/#">
          <img className="logo-image" src={youtubeLogo} alt="youtube logo" />
        </a>
        <a href="/#">
          <img className="logo-image" src={twitterLogo} alt="twitter logo" />
        </a>
        <a href="/#">
          <img className="logo-image" src={pinterestLogo} alt="pinterest logo" />
        </a>
        <a href="/#">
          <img className="logo-image" src={instaLogo} alt="instagram logo" />{' '}
        </a>
      </SocialIconContainer>
      <LinkContainer>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/stories">
          Stories
        </Link>
        <Link className="link" to="/features">
          Features
        </Link>
        <Link className="link" to="/pricing">
          Pricing
        </Link>
      </LinkContainer>
      <a href="/#" className="invite-link">
        Get an invite{' '}
        <span>
          <img className="arrow-image" src={arrow} alt=""></img>
        </span>
      </a>
      <p className="copyrightInfo">Copyright 2019. All Rights Reserved</p>
    </BottomContainer>
  );
};

export default BottomSection;
