import styled from 'styled-components';
import { Button } from '@mui/material';
import { FONTS } from '../../../theme';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';

export const FilterBarContainer = styled.div`
  @media (${MEDIA_KEYS.MIN_TABLET}) {
    width: auto;
  }

  button {
    font-size: ${FONTS.SIZES.mobileOperationsBar};
    text-transform: capitalize;
  }
`;

export const FilterItem = styled(Button)`
  @media (${MEDIA_KEYS.MIN_TABLET}) {
    :first-of-type {
      width: 40px;
    }

    :nth-child(2),
    :nth-child(3) {
      width: 60px;
    }

    :last-of-type {
      width: 80px;
    }
  } ;
`;
