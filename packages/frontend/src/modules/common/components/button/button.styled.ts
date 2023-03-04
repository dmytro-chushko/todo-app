import styled, { css } from 'styled-components';
import { COLORS, SIZES } from '../../../theme';
import { MEDIA_KEYS } from '../../consts/app-keys.const';
import { PURPOSE } from './types';

interface IButton {
  purpose?: PURPOSE;
}

export const Button = styled.button<IButton>`
  width: ${({ purpose }) => {
    switch (purpose) {
      case PURPOSE.HEADER:
        return SIZES.BUTTON.RESONSIVE;
      case PURPOSE.REGULAR:
        return SIZES.BUTTON.REGULAR;
      case PURPOSE.ICON:
        return SIZES.BUTTON.ICON;
      default:
        return 'auto';
    }
  }};
  ${({ purpose }) =>
    purpose === PURPOSE.BACK &&
    css`
      width: ${SIZES.BUTTON.REGULAR};

      @media (${MEDIA_KEYS.MIN_DESKTOP}) {
        width: ${SIZES.BUTTON.l};
      }
    `}
  ${({ purpose }) =>
    purpose === PURPOSE.HEADER &&
    css`
      @media (${MEDIA_KEYS.MIN_DESKTOP}) {
        width: ${SIZES.BUTTON.m};
      }
    `}
  height: ${SIZES.BUTTON.HEIGHT};
  line-height: 0;
  background-color: ${COLORS.buttonColor};
  border: none;
  border-radius: ${SIZES.BORDER_RADIUS};
  color: ${COLORS.white};
  transition: all ease-in-out ${SIZES.TRANSITION.DURATION};

  :not([disabled]):hover,
  :not([disabled]):focus {
    background-color: ${COLORS.hoverButtonColor};
    box-shadow: ${SIZES.BOX_SHADOW} ${COLORS.buttonShadow};
    outline: none;
  }

  :disabled {
    cursor: auto;
    opacity: 0.6;
  }
`;
