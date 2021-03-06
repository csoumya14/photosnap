import React from 'react';
import styled from 'styled-components';
import Links from './Links';
import SocialIconLinks from './SocialIconLinks';
import logo from './../assets/shared/desktop/logo.svg';
import GetAnInvite from './GetAnInviteLink';

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
    font-size: 12px;
    align-self: flex-start;
    margin-left: 6.375rem;
  }
  .copyrightInfo {
    color: #fff;
    font-size: 15px;
    width: 15.938rem;
    opacity: 50.25%;
    margin-top: 2.125rem;
    margin-bottom: 3.5rem;
  }

  @media only screen and (min-width: 768px) {
    display: grid;
    height: 284px;
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

const BottomSection = () => {
  const linkName = 'Get an invite';
  const blackBackgroundColor = true;
  return (
    <BottomContainer>
      <LogoImg src={logo} alt="" />
      <SocialIconLinks />
      <Links />
      <div className="invite-link">
        <GetAnInvite linkName={linkName} blackBackgroundColor={blackBackgroundColor} />
      </div>
      <p className="copyrightInfo">Copyright 2019. All Rights Reserved</p>
    </BottomContainer>
  );
};

export default BottomSection;
