import React from 'react';
import { FilterBar } from '../filter-bar';
import { SearchField } from '../search-field';

import * as Styled from './operations-bar.styled';

export const OperationsBar = () => (
  <Styled.OperatoionsContainer>
    <SearchField />
    <FilterBar />
  </Styled.OperatoionsContainer>
);

export default OperationsBar;
