import React from 'react';
import { UserFormPurpose } from '../common/components/user-form/types';
import { UserForm } from '../common/components/user-form';

import * as Styled from '../common/common.styled';

export const LoginPageContainer = () => (
  <Styled.StartContainer>
    <Styled.FormTitle>Login</Styled.FormTitle>
    <UserForm purpose={UserFormPurpose.LOGIN} />
  </Styled.StartContainer>
);
