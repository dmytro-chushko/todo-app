import styled from 'styled-components';
import { Switch } from '@mui/material';
import { COLORS } from '../../../theme';

export const TodoSwitch = styled(Switch)`
  .css-1yjjitx-MuiSwitch-track,
  .css-jsexje-MuiSwitch-thumb {
    transition: all ease-in-out 0.4s;
  }

  :hover .css-1yjjitx-MuiSwitch-track,
  input:focus .css-1yjjitx-MuiSwitch-track,
  :hover .css-jsexje-MuiSwitch-thumb,
  input:focus .css-jsexje-MuiSwitch-thumb {
    background-color: ${COLORS.hoverButtonColor};
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
