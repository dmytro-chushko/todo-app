import React from 'react';
import { ModeEdit } from '@mui/icons-material';
import { Switch } from '@mui/material';
import { Button } from '../../../common/components/button';

import * as Styled from './controls.styled';

export const Controls = () => (
  <Styled.CtrlContainer>
    <Styled.CtrlWrapper>
      <Button purpose="card" type="button">
        View
      </Button>
      <Button purpose="card" type="button">
        Delete
      </Button>
    </Styled.CtrlWrapper>
    <Styled.CtrlWrapper>
      <Switch defaultChecked />
      <Button purpose="icon" type="button">
        <ModeEdit fontSize="small" />
      </Button>
    </Styled.CtrlWrapper>
  </Styled.CtrlContainer>
);
