import React from 'react';
import { PURPOSE, TYPE } from './types';

import * as Styled from './button.styled';

interface IButtonProps {
  purpose?: PURPOSE;
  children: React.ReactNode;
  type: TYPE;
  disabled?: boolean;
}

const Button = ({ purpose, type, children, disabled }: IButtonProps) => (
  <Styled.Button purpose={purpose} type={type} disabled={disabled}>
    {children}
  </Styled.Button>
);
export default Button;
