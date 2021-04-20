import React, { useState } from 'react';
import styled from 'styled-components';
import PriceFirstSection from '../../components/Price/PricingFirstSection';
import ToggleSwitchSection from '../../components/Price/ToggleSection';
import TableSection from '../../components/Price/FeatureTable';
import Beta from '../../components/BetaSection';
import BottomSection from '../../components/Home/BottomSection';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
`;

const PricingPage = ({ cardInfo }) => {
  let [checked, setChecked] = useState(false);
  const onToggleChange = checked => {
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
