import React from 'react';
import { Switch, CircularProgress } from '@mui/material';
import { useSetIsComplete } from '../../hooks/set-is-complete.hook';

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
    <Switch checked={isCompleted} onChange={handleSwitch} />
  );
};
