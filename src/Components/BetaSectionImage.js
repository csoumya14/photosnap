import styled from 'styled-components';

const ImageSection = styled.div`
  z-index: -1;
  position: absolute;
  overflow: hidden;
  @media only screen and (min-width: 421px) {
    width: 100vw;
    overflow: hidden;
    max-width: 100%;
    height: 480px;
  }
  @media only screen and (min-width: 768px) {
    height: 280px;
  }
`;
const BetaSectionImage = ({ desktopBeta, tabBeta, betaImage }) => {
  return (
    <ImageSection>
      <picture className="picture">
        <source media="(min-width:800px)" srcSet={desktopBeta}></source>
        <source media="(min-width:500px)" className="source" srcSet={tabBeta}></source>
        <img src={betaImage} alt=" a man holding camera"></img>
      </picture>
    </ImageSection>
  );
};

export default BetaSectionImage;
