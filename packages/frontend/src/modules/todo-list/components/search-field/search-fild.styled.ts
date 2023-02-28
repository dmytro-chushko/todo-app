import styled from 'styled-components';
import { TextField } from '@mui/material';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';
import { SIZES } from '../../../theme';

export const SearchInput = styled(TextField)`
  width: ${SIZES.SEARCH.MOBILE};

  @media (${MEDIA_KEYS.MIN_TABLET}) {
    width: auto;
    min-width: ${SIZES.SEARCH.TABLET};
  }

  input {
    height: ${SIZES.SEARCH.HEIGHT};
  }
`;
