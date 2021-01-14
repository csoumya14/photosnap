import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './assets/shared/desktop/logo.svg';

const Container = styled.div`
  width: 100vw;
  height: 72px;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: '. . .';

  .logo-container {
    justify-self: center;
  }
  .menu-big {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 269px;
    height: 16px;
    align-self: center;
    justify-self: center;
  }
  .list-item-big {
    list-style: none;
    text-transform: uppercase;
  }
  .link-items-big {
    text-decoration: none;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    color: #000000;
    &:hover {
      opacity: 0.3;
    }
  }
  .invite-button {
    width: 158px;
    height: 40px;
    margin-top: 16px;
    font-weight: 700;
    text-transform: uppercase;
    background: #000000;
    color: #ffffff;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;
    justify-self: center;
    &:hover {
      background: #dfdfdf;
      cursor: pointer;
    }
  }
`;

const Logo = styled.img`
  width: 170px;
  height: 16px;
  margin-top: 1.75rem;
`;

const NavBarBigScreen = () => {
  return (
    <Container>
      <Link to="/" className="logo-container">
        <Logo src={logo}></Logo>
      </Link>
      <ul className="menu-big">
        <li className="list-item-big">
          <Link className="link-items-big" to="/stories">
            Stories
          </Link>
        </li>
        <li className="list-item-big">
          <Link className="link-items-big" to="/features">
            features
          </Link>
        </li>
        <li className="list-item-big">
          <Link className="link-items-big" to="/pricing">
            pricing
          </Link>
        </li>
      </ul>
      <button className="invite-button">Get an invite</button>
    </Container>
  );
};

export default NavBarBigScreen;
