import React from 'react';
import { AddTodo } from '../add-todo';
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
    <Styled.OperationsWrapper>
      <SearchField searchTerm={searchTerm} setSearchTernm={setSearchTernm} />
      <AddTodo />
    </Styled.OperationsWrapper>
    <FilterBar setFilterValue={setFilterValue} filterValue={filterValue} />
  </Styled.OperatoionsContainer>
);

export default OperationsBar;
