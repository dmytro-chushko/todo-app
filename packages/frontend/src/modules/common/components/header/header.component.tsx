import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Button } from '../button/button.styled';
import { PURPOSE } from '../button/types';
import { MEDIA_KEYS } from '../../consts/app-keys.const';
import { MyProfile } from '../my-profile';

import * as Styled from './header.styled';

export const Header = () => {
  const isTablet = useMediaQuery(`(${MEDIA_KEYS.MIN_TABLET})`);

  return (
    <Styled.HeaderContainer>
      {!isTablet && (
        <Button purpose={PURPOSE.HEADER} type="button">
          Todo List
        </Button>
      )}
      <MyProfile />
    </Styled.HeaderContainer>
  );
};

export default Header;
