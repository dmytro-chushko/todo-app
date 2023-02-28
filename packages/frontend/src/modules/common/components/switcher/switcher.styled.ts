import styled from 'styled-components';
import { Switch } from '@mui/material';
import { COLORS, SIZES } from '../../../theme';

export const TodoSwitch = styled(Switch)`
  .css-1yjjitx-MuiSwitch-track,
  .css-jsexje-MuiSwitch-thumb {
    transition: all ease-in-out ${SIZES.TRANSITION.DURATION};
  }

  :hover .css-1yjjitx-MuiSwitch-track,
  input:focus .css-1yjjitx-MuiSwitch-track,
  :hover .css-jsexje-MuiSwitch-thumb,
  input:focus .css-jsexje-MuiSwitch-thumb {
    background-color: ${COLORS.hoverButtonColor};
    box-shadow: ${SIZES.BOX_SHADOW};
  }
`;
