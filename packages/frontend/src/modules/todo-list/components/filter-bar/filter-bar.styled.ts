import styled from 'styled-components';
import { Button } from '@mui/material';
import { COLORS, FONTS, SIZES } from '../../../theme';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';

export const FilterBarContainer = styled.div`
  @media (${MEDIA_KEYS.MIN_TABLET}) {
    width: auto;
  }

  button {
    font-size: ${FONTS.SIZES.mobileOperationsBar};
    text-transform: capitalize;
    transition: all ease-in-out ${SIZES.TRANSITION.DURATION};

    :hover {
      color: ${COLORS.white};
      background-color: ${COLORS.hoverButtonColor};
      border: none;
    }
  }
`;

export const FilterItem = styled(Button)`
  @media (${MEDIA_KEYS.MIN_TABLET}) {
    :first-of-type {
      width: ${SIZES.FILTER.ALL};
    }

    :nth-child(2),
    :nth-child(3) {
      width: ${SIZES.FILTER.PRIVATE_PUBLIC};
    }

    :last-of-type {
      width: ${SIZES.FILTER.COMPLETED};
    }
  } ;
`;
