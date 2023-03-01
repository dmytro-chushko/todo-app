import React from 'react';
import { PURPOSE, TYPE } from './types';

import * as Styled from './button.styled';

interface IButtonProps {
  purpose?: PURPOSE;
  children: React.ReactNode;
  type: TYPE;
}

const Button = ({ purpose, type, children }: IButtonProps) => (
  <Styled.Button purpose={purpose} type={type}>
    {children}
  </Styled.Button>
);
export default Button;
