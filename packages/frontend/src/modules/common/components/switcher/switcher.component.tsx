import React from 'react';
import { CircularProgress } from '@mui/material';
import { useSetIsComplete } from '../../hooks/set-is-complete.hook';

import * as Styled from './switcher.styled';
import { ValuName } from '../../types/components.types';

interface ISwitcherIsCompleted {
  id: string;
  isValue: boolean;
  isPageLoading?: boolean;
  valueName: ValuName;
}

export const SwitcherIsValue = ({
  id,
  isValue,
  valueName,
  isPageLoading
}: ISwitcherIsCompleted) => {
  const { handleSwitch, isLoading } = useSetIsComplete({
    id,
    isValue,
    valueName
  });

  return isLoading || isPageLoading ? (
    <CircularProgress />
  ) : (
    <Styled.TodoSwitch checked={isValue} onChange={handleSwitch} />
  );
};
