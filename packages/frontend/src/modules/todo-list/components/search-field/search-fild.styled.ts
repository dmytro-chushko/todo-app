import styled from 'styled-components';
import { TextField } from '@mui/material';
import { SPACES } from '../../../theme';

export const SearchFieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACES.m};
`;

export const SearchInput = styled(TextField)`
  width: 70%;

  input {
    height: 17px;
  }
`;
