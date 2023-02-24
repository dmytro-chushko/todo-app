import React from 'react';
import { ButtonPurpose } from './types';

import * as Styled from './button.styled';

interface IButtonProps {
  purpose?: ButtonPurpose;
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
}

const Button = ({ purpose, type, children }: IButtonProps) => (
  <Styled.Button purpose={purpose} type={type}>
    {children}
  </Styled.Button>
);
export default Button;
