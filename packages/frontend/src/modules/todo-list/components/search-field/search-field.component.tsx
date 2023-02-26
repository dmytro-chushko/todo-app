import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

import * as Styled from './search-fild.styled';

interface ISearchFieldProps {
  searchTerm: string;
  setSearchTernm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchField = ({ searchTerm, setSearchTernm }: ISearchFieldProps) => (
  <Styled.SearchInput
    id="input-with-icon-textfield"
    label="Search"
    size="small"
    value={searchTerm}
    onChange={(e) => setSearchTernm(e.target.value)}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      )
    }}
    variant="outlined"
  />
);

export default SearchField;
