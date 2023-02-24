import React from 'react';
import { Button } from '../../../common/components/button/button.styled';

import * as Styled from './header.styled';

export const Header = () => (
  <Styled.HeaderContainer>
    <Button purpose="header" type="button">
      Todo List
    </Button>
    <Button purpose="header" type="button">
      My Profile
    </Button>
  </Styled.HeaderContainer>
);

export default Header;
