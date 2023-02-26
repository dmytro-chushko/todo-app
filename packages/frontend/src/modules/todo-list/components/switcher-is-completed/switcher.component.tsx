import React from 'react';
import { CircularProgress } from '@mui/material';
import { useSetIsComplete } from '../../hooks/set-is-complete.hook';

import * as Styled from './switcher.styled';

interface ISwitcherIsCompleted {
  id: string;
  isCompleted: boolean;
}

export const SwitcherIsCompleted = ({ id, isCompleted }: ISwitcherIsCompleted) => {
  const { handleSwitch, isLoading } = useSetIsComplete({
    id,
    isCompleted
  });

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Styled.TodoSwitch checked={isCompleted} onChange={handleSwitch} />
  );
};
