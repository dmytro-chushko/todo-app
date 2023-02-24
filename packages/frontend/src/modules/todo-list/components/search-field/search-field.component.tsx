import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import * as Styled from './search-fild.styled';

export const SearchField = () => (
  <Styled.SearchFieldContainer>
    <TextField
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
  </Styled.SearchFieldContainer>
);

export default SearchField;
