import React from 'react';
import { UserFormPurpose } from '../common/components/user-form/types';
import { UserForm } from '../common/components/user-form';
import { useLogin } from '../common/hooks/login.hook';

import * as Styled from '../common/common.styled';

export const LoginPageContainer = () => {
  const { handleSubmit, isLoading } = useLogin();

  return (
    <Styled.StartContainer>
      <Styled.FormTitle>Login</Styled.FormTitle>
      <UserForm purpose={UserFormPurpose.LOGIN} handleSubmit={handleSubmit} isLoading={isLoading} />
    </Styled.StartContainer>
  );
};
