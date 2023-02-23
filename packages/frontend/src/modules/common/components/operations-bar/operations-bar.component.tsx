import React from 'react';
import FilterBar from '../filter-bar/filter-bar.component';
import SearchField from '../search-field/search-field.component';

import * as Styled from './operations-bar.styled';

const OperationsBar = () => (
  <Styled.OperatoionsContainer>
    <SearchField />
    <FilterBar />
  </Styled.OperatoionsContainer>
);

export default OperationsBar;
