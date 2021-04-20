import styled from 'styled-components';
import socialIconLinks from '../data/SocialIconLinkData';
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
const SocialIconLinks = () => {
  return (
    <SocialIconContainer>
      {socialIconLinks.map(icons => (
        <a href="/#" key={icons.id}>
          <img className="logo-image" src={icons.logoImage} alt={icons.altText} />
        </a>
      ))}
    </SocialIconContainer>
  );
};

export default SocialIconLinks;
