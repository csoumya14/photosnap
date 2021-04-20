import styled from 'styled-components';

const RectanglePink = styled.div`
  position: absolute;
  width: 128px;
  height: 6px;
  left: 33px;
  background: linear-gradient(26.57deg, #ffc593 0%, #bc7198 43.29%, #5a77ff 83.33%);
  @media only screen and (min-width: 421px) {
    width: 6px;
    height: 144px;
    left: 0px;
    margin-top: 174px;
  }
`;
const PinkRectangle = () => {
  return <RectanglePink></RectanglePink>;
};
export default PinkRectangle;
