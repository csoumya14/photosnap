import React from 'react';
import styled from 'styled-components';
import RowItem from './RowItem';

const Table = styled.table`
  width: 100%;
  height: 552px;
  .row-heading {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    text-align: left;
    letter-spacing: 2px;
    line-height: 16px;
  }
  .feature-heading {
    padding-left: 24px;
  }
  .row-heading th {
    padding-bottom: 16px;
    border-bottom: 1px solid black;
  }
  .heading {
    width: 120px;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const BigScreenTableSection = () => {
  return (
    <Table>
      <thead>
        <tr className="row-heading">
          <th className="feature-heading">the features</th>
          <th className="heading">basic</th>
          <th className="heading">pro</th>
          <th className="heading">business</th>
        </tr>
      </thead>
      <tbody>
        <RowItem label={'unlimited story posting'} basic pro business />
        <RowItem label={'unlimited photo upload'} basic pro business />
        <RowItem label={'embedding custom content'} pro business />
        <RowItem label={'customize metadata'} pro business />
        <RowItem label={'advanced metrics'} business />
        <RowItem label={'photo downloads'} business />
        <RowItem label={'search engine indexing'} business />
        <RowItem label={'custom analytics'} business />
      </tbody>
    </Table>
  );
};
export default BigScreenTableSection;
