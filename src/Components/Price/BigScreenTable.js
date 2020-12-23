import React from 'react';
import styled from 'styled-components';
import RowItem from './RowItem';

const Table = styled.table`
  width: 318px;
  height: 952px;
  margin-left: 29px;
  border: 1px solid black;
`;

const BigScreenTableSection = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>the features</th>
          <th>basic</th>
          <th>pro</th>
          <th>business</th>
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
