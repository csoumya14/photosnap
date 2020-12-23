import React, { useState } from 'react';
import styled from 'styled-components';
import PriceFirstSection from './PricingFirstSection';
import ToggleSwitchSection from './ToggleSection';
import TableSection from './FeatureTable';
import Beta from './BetaSection';
import BottomSection from './BottomSection';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
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
      <TableSection />
      <Beta />
      <BottomSection />
    </Container>
  );
};

export default PricingPage;
