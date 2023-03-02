import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../common/components/button';
import { PURPOSE } from '../common/components/button/types';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';

import * as CommonStyles from '../common/common.styled';
import * as Styled from './home.styled';

const HomePageContainer = () => {
  const history = useHistory();

  return (
    <CommonStyles.StartContainer home>
      <Styled.HomeTitle>App Todo</Styled.HomeTitle>
      <Button
        purpose={PURPOSE.REGULAR}
        type="button"
        onClick={() => history.push(ROUTER_KEYS.LOGIN)}
      >
        Login
      </Button>
      <Button
        purpose={PURPOSE.REGULAR}
        type="button"
        onClick={() => history.push(ROUTER_KEYS.REGISTER)}
      >
        Signup
      </Button>
    </CommonStyles.StartContainer>
  );
};

export default HomePageContainer;
