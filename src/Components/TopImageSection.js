import styled from 'styled-components';

const ImageSection = styled.div`
  @media only screen and (min-width: 421px) and (max-width: 767px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column: 2/3;
    height: 490px;
    overflow: hidden;
  }
  @media only screen and (min-width: 768px) {
    object-fit: cover;
    grid-row: 1/2;
    grid-column-start: 2/3;
    height: 650px;
    overflow: hidden;

    z-index: -1;
  }
`;

const TopImageSection = ({ desktopImg, tabScreenImg, hero, altText }) => {
  return (
    <ImageSection>
      <picture className="picture">
        <source media="(min-width:1024px)" srcSet={desktopImg}></source>
        <source media="(min-width:500px)" srcSet={tabScreenImg}></source>
        <img src={hero} alt={altText} className="hero-image"></img>
      </picture>
    </ImageSection>
  );
};

export default TopImageSection;
