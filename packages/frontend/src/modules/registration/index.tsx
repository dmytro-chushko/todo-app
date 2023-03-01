import React from 'react';
import { UserFormPurpose } from '../common/components/user-form/types';
import { UserForm } from '../common/components/user-form';
import { useSignup } from '../common/hooks/signup.hook';

import * as Styled from '../common/common.styled';

export const RegistrPageContainer = () => {
  const { handleSubmit, isLoading } = useSignup();

  return (
    <Styled.StartContainer>
      <Styled.FormTitle>Registration</Styled.FormTitle>
      <UserForm
        purpose={UserFormPurpose.REGISTER}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Styled.StartContainer>
  );
};
