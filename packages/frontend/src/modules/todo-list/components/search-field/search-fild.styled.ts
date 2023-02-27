import styled from 'styled-components';
import { TextField } from '@mui/material';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';

export const SearchInput = styled(TextField)`
  width: 70%;

  @media (${MEDIA_KEYS.MIN_TABLET}) {
    width: auto;
    min-width: 100px;
  }

  input {
    height: 17px;
  }
`;
