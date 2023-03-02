import React from 'react';
import { IFilter } from '../../types/todo-list.types';
import { AddTodo } from '../add-todo';
import { FilterBar } from '../filter-bar';
import { SearchField } from '../search-field';

import * as Styled from './operations-bar.styled';

interface IOperationsBarProps {
  searchTerm: string;
  setSearchTernm: React.Dispatch<React.SetStateAction<string>>;
  filterValue: string | null;
  setFilterValue: React.Dispatch<React.SetStateAction<string | null>>;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const OperationsBar = ({
  searchTerm,
  setSearchTernm,
  filterValue,
  setFilterValue,
  setFilter
}: IOperationsBarProps) => (
  <Styled.OperatoionsContainer>
    <Styled.OperationsWrapper>
      <SearchField searchTerm={searchTerm} setSearchTernm={setSearchTernm} setFilter={setFilter} />
      <AddTodo />
    </Styled.OperationsWrapper>
    <FilterBar setFilterValue={setFilterValue} filterValue={filterValue} setFilter={setFilter} />
  </Styled.OperatoionsContainer>
);

export default OperationsBar;
