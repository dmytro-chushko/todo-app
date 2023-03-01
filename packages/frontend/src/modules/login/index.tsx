import React from 'react';
import { UserFormPurpose } from '../common/components/user-form/types';
import { UserForm } from '../common/components/user-form';

import * as Styled from '../common/common.styled';
import { useSignup } from '../common/hooks/signup.hook';

export const LoginPageContainer = () => {
  const { handleSubmit, isLoading } = useSignup();

  return (
    <Styled.StartContainer>
      <Styled.FormTitle>Login</Styled.FormTitle>
      <UserForm purpose={UserFormPurpose.LOGIN} handleSubmit={handleSubmit} isLoading={isLoading} />
    </Styled.StartContainer>
  );
};
