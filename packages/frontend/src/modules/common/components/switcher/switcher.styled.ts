import styled, { css } from 'styled-components';
import { Switch } from '@mui/material';
import { COLORS, SIZES } from '../../../theme';

export const TodoSwitch = styled(Switch)`
  .css-1yjjitx-MuiSwitch-track,
  .css-jsexje-MuiSwitch-thumb {
    transition: all ease-in-out ${SIZES.TRANSITION.DURATION};
  }

  ${({ disabled }: { disabled?: boolean }) =>
    !disabled &&
    css`
      :hover
        .css-1yjjitx-MuiSwitch-track:not(.css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-disabled),
      input:focus .css-1yjjitx-MuiSwitch-track,
      :hover .css-jsexje-MuiSwitch-thumb:not([disabled]),
      input:focus .css-jsexje-MuiSwitch-thumb {
        background-color: ${COLORS.hoverButtonColor};
        box-shadow: ${SIZES.BOX_SHADOW};
      }
    `};
`;
