import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

import * as Styled from './filter-bar.styled';
import { FILTER_KEYS } from '../../../common/consts/app-keys.const';

interface IFilterBarProps {
  setFilterValue: React.Dispatch<React.SetStateAction<string | null>>;
  filterValue: string | null;
}

export const FilterBar = ({ setFilterValue, filterValue }: IFilterBarProps) => (
  <Styled.FilterBarContainer>
    <ButtonGroup variant="outlined" size="small" fullWidth aria-label="todo filter bar">
      <Button
        variant={filterValue === FILTER_KEYS.ALL ? 'contained' : 'outlined'}
        onClick={(e) => {
          setFilterValue(e.currentTarget.textContent);
        }}
      >
        {FILTER_KEYS.ALL}
      </Button>
      <Button
        variant={filterValue === FILTER_KEYS.PRIVATE ? 'contained' : 'outlined'}
        onClick={(e) => setFilterValue(e.currentTarget.textContent)}
      >
        {FILTER_KEYS.PRIVATE}
      </Button>
      <Button
        variant={filterValue === FILTER_KEYS.PUBLIC ? 'contained' : 'outlined'}
        onClick={(e) => setFilterValue(e.currentTarget.textContent)}
      >
        {FILTER_KEYS.PUBLIC}
      </Button>
      <Button
        variant={filterValue === FILTER_KEYS.COMPLETED ? 'contained' : 'outlined'}
        onClick={(e) => setFilterValue(e.currentTarget.textContent)}
      >
        {FILTER_KEYS.COMPLETED}
      </Button>
    </ButtonGroup>
  </Styled.FilterBarContainer>
);

export default FilterBar;
