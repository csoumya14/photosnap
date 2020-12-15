import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import menu from './assets/shared/mobile/menu.svg';
import closeButton from './assets/shared/mobile/close.svg';
import logo from './assets/shared/desktop/logo.svg';
import { useViewPort } from './CustomViewPort';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 4.5rem;
  .menu {
    position: absolute;
    top: 4.5rem;
    border: 1px solid transparent;
    width: 100vw;
    height: 15.813rem;
    background-color: #fff;
    text-align: center;
    
  .u-link {
    width: 100vw;
    list-style: none;
  }
  .list-items {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }

  .link-items {
    position: relative;
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;

    color: black;
    letter-spacing: 2.5px;
    margin-bottom: 1.25rem;

    text-transform: uppercase;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  .line {
    height: 1px;
    width: 19.375rem;
    background: #000;
    opacity: 0.25;
    margin-left: -1rem;
  }
  .invite-button {
    width: 19.375rem;
    height: 3rem;
    margin-top: 1.25rem;
    margin-left: -3.5rem;
    text-transform: uppercase;
    font-size: 15px;
    text-align: center;
    letter-spacing: 2.5px;
    color: #fff;
    background: #000;
  }
`;
const Logo = styled.img`
  width: 10.625rem;
  height: 1rem;
  margin-top: 1.75rem;
  margin-left: 1.5rem;
`;
const HamburgerImg = styled.input`
  width: 1.25rem;
  height: 0.375rem;
  margin-top: 2.063rem;
  margin-right: 2rem;
  opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  transition: opacity ease-in-out 0.5s;
`;
const CloseImg = styled.input`
  position: absolute;
  width: 1rem;
  height: 0.938rem;
  margin-top: 1.813rem;
  margin-left: 20.513rem;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity ease-in-out 0.5s;
`;

const NavBar = () => {
  const [isSmallScreen] = useViewPort();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Link to="/">
        <Logo src={logo}></Logo>
      </Link>
      <HamburgerImg
        type="image"
        tabIndex="0"
        src={menu}
        alt="drop-down-button"
        isOpen={isOpen}
        onClick={toggleNav}
      />
      <CloseImg
        type="image"
        tabIndex="0"
        src={closeButton}
        alt=""
        onClick={toggleNav}
        isOpen={isOpen}
      />
      {!isSmallScreen && isOpen && (
        <nav className="menu" id="dropdown1">
          <ul tabIndex="-1" className="u-link">
            <li className="list-items">
              <Link className="link-items" to="/stories" onClick={toggleNav}>
                Stories
              </Link>
            </li>
            <li className="list-items">
              <Link className="link-items" to="/features" onClick={toggleNav}>
                Features
              </Link>
            </li>
            <li className="list-items">
              <Link className="link-items" to="/pricing" onClick={toggleNav}>
                Pricing
              </Link>
            </li>
            <div className="line"></div>
            <button className="invite-button">Get an invite</button>
          </ul>
        </nav>
      )}
    </Container>
  );
};

export default NavBar;
