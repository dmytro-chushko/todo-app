import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { Button } from '../../../common/components/button';

import * as Styled from './search-fild.styled';

interface ISearchFieldProps {
  searchTerm: string;
  setSearchTernm: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchField = ({ searchTerm, setSearchTernm }: ISearchFieldProps) => (
  <Styled.SearchFieldContainer>
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
    <Button purpose="regular" type="button">
      Add
    </Button>
  </Styled.SearchFieldContainer>
);

export default SearchField;
