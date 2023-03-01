import React from 'react';
import { UserFormPurpose } from '../common/components/user-form/types';
import { UserForm } from '../common/components/user-form';

import * as Styled from '../common/common.styled';

export const RegistrPageContainer = () => (
  <Styled.StartContainer>
    <Styled.FormTitle>Registration</Styled.FormTitle>
    <UserForm purpose={UserFormPurpose.REGISTER} />
  </Styled.StartContainer>
);
