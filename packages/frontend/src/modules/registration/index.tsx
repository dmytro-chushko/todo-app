import React from 'react';
import { UserFormPurpose } from './types/registration.types';
import { UserForm } from './user-form';

import * as Styled from './registration.styled';

export const RegistrPageContainer = () => (
  <Styled.StartContainer>
    <Styled.FormTitle>Registration</Styled.FormTitle>
    <UserForm purpose={UserFormPurpose.REGISTER} />
  </Styled.StartContainer>
);
