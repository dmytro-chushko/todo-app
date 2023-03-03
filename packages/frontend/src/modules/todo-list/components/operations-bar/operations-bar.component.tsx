import React from 'react';
import { IFilter } from '../../types/todo-list.types';
import { AddTodo } from '../add-todo';
import { FilterBar } from '../filter-bar';
import { SearchField } from '../search-field';

import * as Styled from './operations-bar.styled';

interface IOperationsBarProps {
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const OperationsBar = ({ setFilter }: IOperationsBarProps) => (
  <Styled.OperatoionsContainer>
    <Styled.OperationsWrapper>
      <SearchField setFilter={setFilter} />
      <AddTodo />
    </Styled.OperationsWrapper>
    <FilterBar setFilter={setFilter} />
  </Styled.OperatoionsContainer>
);

export default OperationsBar;
