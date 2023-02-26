import React from 'react';
import { Button } from '../button/button.styled';
import { PURPOSE } from '../button/types';

import * as Styled from './header.styled';

export const Header = () => (
  <Styled.HeaderContainer>
    <Button purpose={PURPOSE.HEADER} type="button">
      Todo List
    </Button>
    <Button purpose={PURPOSE.HEADER} type="button">
      My Profile
    </Button>
  </Styled.HeaderContainer>
);

export default Header;
