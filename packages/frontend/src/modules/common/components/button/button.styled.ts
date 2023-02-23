import styled from 'styled-components';
import { COLORS } from '../../../theme';

interface IButton {
  header?: boolean;
}

export const Button = styled.button<IButton>`
  width: ${({ header }) => (header ? '35%' : '20%')};
  background-color: ${COLORS.buttonColor};
  border: none;
  border-radius: 5px;
  color: ${COLORS.white};
  transition: all ease-in-out 0.4s;

  :hover {
    background-color: ${COLORS.hoverButtonColor};
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
