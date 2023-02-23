import React from 'react';
import { Button } from '../button/button.styled';

import * as Styled from './header.styled';

const Header = () => (
  <Styled.HeaderContainer>
    <Button header>Todo List</Button>
    <Button header>My Profile</Button>
  </Styled.HeaderContainer>
);

export default Header;
