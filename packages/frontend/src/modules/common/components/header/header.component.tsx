import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Button } from '../button/button.styled';
import { PURPOSE } from '../button/types';
import { MEDIA_KEYS, ROUTER_KEYS } from '../../consts/app-keys.const';
import { MyProfile } from '../my-profile';

import * as Styled from './header.styled';

export const Header = () => {
  const isTablet = useMediaQuery(`(${MEDIA_KEYS.MIN_TABLET})`);
  const history = useHistory();

  return (
    <Styled.HeaderContainer>
      {!isTablet && (
        <Button
          purpose={PURPOSE.HEADER}
          type="button"
          onClick={() => history.push(ROUTER_KEYS.TODO)}
        >
          Todo List
        </Button>
      )}
      <MyProfile />
    </Styled.HeaderContainer>
  );
};

export default Header;
