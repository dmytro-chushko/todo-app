import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { Button } from '../../../common/components/button';

import * as Styled from './search-fild.styled';

export const SearchField = () => (
  <Styled.SearchFieldContainer>
    <Styled.SearchInput
      id="input-with-icon-textfield"
      label="Search"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      variant="outlined"
    />
    <Button purpose="regular" type="button">
      Add
    </Button>
  </Styled.SearchFieldContainer>
);

export default SearchField;
