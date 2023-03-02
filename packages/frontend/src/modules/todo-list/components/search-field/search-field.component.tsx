import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

import * as Styled from './search-fild.styled';
import { IFilter } from '../../types/todo-list.types';

interface ISearchFieldProps {
  searchTerm: string;
  setSearchTernm: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const SearchField = ({ searchTerm, setSearchTernm, setFilter }: ISearchFieldProps) => (
  <Styled.SearchInput
    id="input-with-icon-textfield"
    label="Search"
    size="small"
    value={searchTerm}
    onChange={(e) => {
      setSearchTernm(e.target.value);
      setFilter((prev) => {
        const searchQuery = e.target.value;
        return { ...prev, search: searchQuery };
      });
    }}
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
