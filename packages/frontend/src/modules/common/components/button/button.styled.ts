import styled, { css } from 'styled-components';
import { COLORS } from '../../../theme';
import { MEDIA_KEYS } from '../../consts/app-keys.const';
import { PURPOSE } from './types';

interface IButton {
  purpose?: PURPOSE;
}

export const Button = styled.button<IButton>`
  width: ${({ purpose }) => {
    switch (purpose) {
      case PURPOSE.HEADER:
        return '35%';
      case PURPOSE.REGULAR:
        return '70px';
      case PURPOSE.ICON:
        return '35px';
      default:
        return 'auto';
    }
  }};
  ${({ purpose }) =>
    purpose === PURPOSE.BACK &&
    css`
      width: 75px;

      @media (${MEDIA_KEYS.MIN_DESKTOP}) {
        width: 150px;
      }
    `}
  ${({ purpose }) =>
    purpose === PURPOSE.HEADER &&
    css`
      @media (${MEDIA_KEYS.MIN_DESKTOP}) {
        width: 100px;
      }
    `}
  height: 35px;
  line-height: 0;
  background-color: ${COLORS.buttonColor};
  border: none;
  border-radius: 5px;
  color: ${COLORS.white};
  transition: all ease-in-out 0.4s;

  :hover,
  :focus {
    background-color: ${COLORS.hoverButtonColor};
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    outline: none;
  }
`;
