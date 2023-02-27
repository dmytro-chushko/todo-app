import React from 'react';
import { ButtonGroup } from '@mui/material';

import * as Styled from './filter-bar.styled';
import { FILTER_KEYS } from '../../../common/consts/app-keys.const';

interface IFilterBarProps {
  setFilterValue: React.Dispatch<React.SetStateAction<string | null>>;
  filterValue: string | null;
}

export const FilterBar = ({ setFilterValue, filterValue }: IFilterBarProps) => (
  <Styled.FilterBarContainer>
    <ButtonGroup variant="outlined" size="medium" fullWidth aria-label="todo filter bar">
      <Styled.FilterItem
        variant={filterValue === FILTER_KEYS.ALL ? 'contained' : 'outlined'}
        onClick={(e) => {
          setFilterValue(e.currentTarget.textContent);
        }}
      >
        {FILTER_KEYS.ALL}
      </Styled.FilterItem>
      <Styled.FilterItem
        variant={filterValue === FILTER_KEYS.PRIVATE ? 'contained' : 'outlined'}
        onClick={(e) => setFilterValue(e.currentTarget.textContent)}
      >
        {FILTER_KEYS.PRIVATE}
      </Styled.FilterItem>
      <Styled.FilterItem
        variant={filterValue === FILTER_KEYS.PUBLIC ? 'contained' : 'outlined'}
        onClick={(e) => setFilterValue(e.currentTarget.textContent)}
      >
        {FILTER_KEYS.PUBLIC}
      </Styled.FilterItem>
      <Styled.FilterItem
        variant={filterValue === FILTER_KEYS.COMPLETED ? 'contained' : 'outlined'}
        onClick={(e) => setFilterValue(e.currentTarget.textContent)}
      >
        {FILTER_KEYS.COMPLETED}
      </Styled.FilterItem>
    </ButtonGroup>
  </Styled.FilterBarContainer>
);

export default FilterBar;
