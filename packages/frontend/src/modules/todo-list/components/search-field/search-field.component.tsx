import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

import * as Styled from './search-fild.styled';
import { IFilter } from '../../types/todo-list.types';

interface ISearchFieldProps {
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const SearchField = ({ setFilter }: ISearchFieldProps) => {
  const [searchTerm, setSearchTerm] = useState<string | null>('');

  const handleClick = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setFilter((prev) => ({ ...prev, search: e.target.value }));
  };

  return (
    <Styled.SearchInput
      id="input-with-icon-textfield"
      label="Search"
      size="small"
      value={searchTerm}
      onChange={handleClick}
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
};

export default SearchField;
