import React from 'react';
import { ModeEdit } from '@mui/icons-material';

import { Button } from '../../../common/components/button';

import * as Styled from './controls.styled';
import { SwitcherIsCompleted } from '../switcher-is-completed';

interface IControlsProps {
  id: string;
  isCompleted: boolean;
}

export const Controls = ({ id, isCompleted }: IControlsProps) => (
  <Styled.CtrlContainer>
    <Styled.CtrlWrapper>
      <Button purpose="regular" type="button">
        View
      </Button>
      <Button purpose="regular" type="button">
        Delete
      </Button>
    </Styled.CtrlWrapper>
    <Styled.CtrlWrapper>
      <SwitcherIsCompleted id={id} isCompleted={isCompleted} />
      <Button purpose="icon" type="button">
        <ModeEdit fontSize="small" />
      </Button>
    </Styled.CtrlWrapper>
  </Styled.CtrlContainer>
);
