import React from 'react';
import { CircularProgress } from '@mui/material';
import { useSetIsComplete } from '../../hooks/set-is-complete.hook';
import { ValueName } from '../../types/components.types';

import * as Styled from './switcher.styled';

interface ISwitcherIsCompleted {
  id: string;
  isValue: boolean;
  isPageLoading?: boolean;
  valueName: ValueName;
  disabled?: boolean;
}

export const SwitcherIsValue = ({
  id,
  isValue,
  valueName,
  isPageLoading,
  disabled
}: ISwitcherIsCompleted) => {
  const { handleSwitch, isLoading } = useSetIsComplete({
    id,
    isValue,
    valueName
  });

  return isLoading || isPageLoading ? (
    <CircularProgress size="small" />
  ) : (
    <Styled.TodoSwitch checked={isValue} onChange={handleSwitch} disabled={disabled} />
  );
};
