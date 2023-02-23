import React from 'react';

import * as Styled from './button.styled';

interface IButtonProps {
  header?: boolean;
  children: React.ReactNode;
}

const Button = ({ header, children }: IButtonProps) => (
  <Styled.Button header={header}>{children}</Styled.Button>
);
export default Button;
