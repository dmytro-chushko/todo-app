import React from 'react';
import { SwitcherIsValue } from '../../../common/components/switcher';
import { ValueName } from '../../../common/types/components.types';

import * as Styled from './switchers-block.styled';

interface ISwitchersBlock {
  id: string;
  isCompleted: boolean;
  isPrivate: boolean;
  isLoading: boolean;
}

export const SwitchersBlock = ({ id, isCompleted, isPrivate, isLoading }: ISwitchersBlock) => (
  <Styled.SwitchersContainer>
    <Styled.SwitcherWrapper>
      <p>Completed</p>
      <SwitcherIsValue
        id={id}
        isValue={isCompleted}
        valueName={ValueName.COMPLETE}
        isPageLoading={isLoading}
      />
    </Styled.SwitcherWrapper>
    <Styled.SwitcherWrapper>
      <p>Private</p>
      <SwitcherIsValue
        id={id}
        isValue={isPrivate}
        valueName={ValueName.PRIVATE}
        isPageLoading={isLoading}
      />
    </Styled.SwitcherWrapper>
  </Styled.SwitchersContainer>
);
