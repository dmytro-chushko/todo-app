import React from 'react';
import { FilterBar } from '../filter-bar';
import { SearchField } from '../search-field';

import * as Styled from './operations-bar.styled';

interface IOperationsBarProps {
  searchTerm: string;
  setSearchTernm: React.Dispatch<React.SetStateAction<string>>;
  filterValue: string | null;
  setFilterValue: React.Dispatch<React.SetStateAction<string | null>>;
}

export const OperationsBar = ({
  searchTerm,
  setSearchTernm,
  filterValue,
  setFilterValue
}: IOperationsBarProps) => (
  <Styled.OperatoionsContainer>
    <SearchField searchTerm={searchTerm} setSearchTernm={setSearchTernm} />
    <FilterBar setFilterValue={setFilterValue} filterValue={filterValue} />
  </Styled.OperatoionsContainer>
);

export default OperationsBar;
