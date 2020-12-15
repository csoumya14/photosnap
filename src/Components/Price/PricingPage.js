import React, { useState } from 'react';
import styled from 'styled-components';
import PriceFirstSection from './PricingFirstSection';
import ToggleSwitchSection from './ToggleSection';

const Container = styled.div`
  @media only screen and (max-width: 420px) {
    width: 100vw;
    max-width: 100%;
  }
`;

const PricingPage = ({ cardInfo }) => {
  let [checked, setChecked] = useState(false);
  const onToggleChange = (checked) => {
    setChecked(checked);
  };
  return (
    <Container>
      <PriceFirstSection />
      <ToggleSwitchSection
        name="toggle-between-switch"
        checked={checked}
        onChange={onToggleChange}
        cardInfo={cardInfo}
      />
    </Container>
  );
};

export default PricingPage;
