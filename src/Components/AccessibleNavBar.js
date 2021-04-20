import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import menu from './../assets/shared/mobile/menu.svg';
import closeButton from './../assets/shared/mobile/close.svg';
import logo from './../assets/shared/desktop/logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height:75px;
 
  .button-image{
    margin-right:2rem;
    background:transparent;
    outline:none;
    border:none;
    width:5rem;
  }
  
  .menu {
    position:absolute;
    top: 3rem;
    transform: translate(-70%);
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
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .line {
      width: 29.375rem;  
    }
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
  margin-right: 0rem;
  opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  transition: opacity ease-in-out 0.5s;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-right: 5rem;
  }
`;
const CloseImg = styled.input`
  position: absolute;
  width: 1.25rem;
  height: 0.938rem;
  margin-top: 1.813rem;
  margin-left: -1.5em;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  transition: opacity ease-in-out 0.5s;
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    margin-left: 28rem;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);

  const wrapKeyHandler = event => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
      activatorRef.current.focus();
    }
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const clickOutsideHandler = event => {
    if (
      dropdownListRef.current.contains(event.target) ||
      activatorRef.current.contains(event.target)
    ) {
      return;
    }
    setIsOpen();
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mouseup', clickOutsideHandler);
      dropdownListRef.current.querySelector('a').focus();
    } else {
      document.removeEventListener('mouseup', clickOutsideHandler);
    }
    return () => {
      document.removeEventListener('mouseup', clickOutsideHandler);
    };
  }, [isOpen]);

  return (
    <Container>
      <Link to="/">
        <Logo src={logo}></Logo>
      </Link>
      <nav className="dropdown" onKeyUp={wrapKeyHandler}>
        <button
          className="button-image"
          aria-expanded="false"
          aria-haspopup="true"
          aria-controls="dropdown1"
          ref={activatorRef}
          onClick={toggleNav}
        >
          <HamburgerImg
            type="image"
            tabIndex="0"
            src={menu}
            alt="drop-down-button"
            isOpen={isOpen}
          />
          <CloseImg type="image" tabIndex="0" src={closeButton} alt="" isOpen={isOpen} />
        </button>
        {isOpen && (
          <ul ref={dropdownListRef} id="dropdown1" tabIndex="-1" className="menu">
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
        )}
      </nav>
    </Container>
  );
};

export default NavBar;
