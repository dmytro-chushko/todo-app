import React, { useState } from 'react';
import { ButtonGroup } from '@mui/material';

import * as Styled from './filter-bar.styled';
import { FILTER_KEYS } from '../../../common/consts/app-keys.const';
import { IFilter } from '../../types/todo-list.types';

interface IFilterBarProps {
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const FilterBar = ({ setFilter }: IFilterBarProps) => {
  const [filterValue, setFilterValue] = useState<string | null>(FILTER_KEYS.ALL);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setFilterValue(e.currentTarget.textContent);
    const filterQuery = e.currentTarget.name;
    setFilter((prev) => ({ ...prev, status: filterQuery }));
  };

  return (
    <Styled.FilterBarContainer>
      <ButtonGroup variant="outlined" size="medium" fullWidth aria-label="todo filter bar">
        <Styled.FilterItem
          variant={filterValue === FILTER_KEYS.ALL ? 'contained' : 'outlined'}
          name=""
          onClick={handleClick}
        >
          {FILTER_KEYS.ALL}
        </Styled.FilterItem>
        <Styled.FilterItem
          variant={filterValue === FILTER_KEYS.PRIVATE ? 'contained' : 'outlined'}
          name="isPrivate"
          onClick={handleClick}
        >
          {FILTER_KEYS.PRIVATE}
        </Styled.FilterItem>
        <Styled.FilterItem
          variant={filterValue === FILTER_KEYS.PUBLIC ? 'contained' : 'outlined'}
          name="isPublic"
          onClick={handleClick}
        >
          {FILTER_KEYS.PUBLIC}
        </Styled.FilterItem>
        <Styled.FilterItem
          variant={filterValue === FILTER_KEYS.COMPLETED ? 'contained' : 'outlined'}
          name="isCompleted"
          onClick={handleClick}
        >
          {FILTER_KEYS.COMPLETED}
        </Styled.FilterItem>
      </ButtonGroup>
    </Styled.FilterBarContainer>
  );
};

export default FilterBar;
