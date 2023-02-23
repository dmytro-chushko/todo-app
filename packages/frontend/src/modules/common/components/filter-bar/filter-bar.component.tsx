import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

import * as Styled from './filter-bar.styled';

const FilterBar = () => (
  <Styled.FilterBarContainer>
    <ButtonGroup variant="outlined" size="small" fullWidth aria-label="todo filter bar">
      <Button variant="contained">All</Button>
      <Button>Private</Button>
      <Button>Publice</Button>
      <Button>Complited</Button>
    </ButtonGroup>
  </Styled.FilterBarContainer>
);

export default FilterBar;
