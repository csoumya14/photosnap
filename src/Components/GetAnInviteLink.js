import arrow from '../assets/shared/desktop/arrow.svg';
import styled from 'styled-components';

const LinkElement = styled.a`
  text-decoration: none;
  width: calc(100% - 70px);
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  height: 1rem;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  .arrow-image {
    width: 2.63rem;
    margin-top: 0.2rem;
    position: absolute;
    margin-left: 1rem;
    height: 0.75rem;
    filter: invert(1) sepia(0) saturate(1) hue-rotate(0deg) brightness(1);
  }
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    .arrow-image {
      margin-left: 1rem;
    }
  }
  @media only screen and (min-width: 768px) {
    width: 387px;
    margin-top: 25px;

    .arrow-image {
      margin-top: 5px;
    }
  }
`;
const GetAnInvite = () => {
  return (
    <LinkElement href="#/">
      Get an invite{' '}
      <span>
        <img className="arrow-image" src={arrow} alt=""></img>
      </span>
    </LinkElement>
  );
};

export default GetAnInvite;
