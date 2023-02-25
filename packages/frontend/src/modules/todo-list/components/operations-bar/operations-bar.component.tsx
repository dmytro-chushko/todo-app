import React from 'react';
import { FilterBar } from '../filter-bar';
import { SearchField } from '../search-field';

import * as Styled from './operations-bar.styled';

interface IOperationsBarProps {
  searchTerm: string;
  setSearchTernm: React.Dispatch<React.SetStateAction<string>>;
}

export const OperationsBar = ({ searchTerm, setSearchTernm }: IOperationsBarProps) => (
  <Styled.OperatoionsContainer>
    <SearchField searchTerm={searchTerm} setSearchTernm={setSearchTernm} />
    <FilterBar />
  </Styled.OperatoionsContainer>
);

export default OperationsBar;
