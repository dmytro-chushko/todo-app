import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Button } from '../button';
import { PURPOSE } from '../button/types';
import { UserFormPurpose, IUserFormValues } from './types';
import { FORM_INIT_VAL, ROUTER_KEYS } from '../../consts/app-keys.const';
import { userSchema } from '../../validations/user-schema';

import * as Styled from './user-from.styled';

interface IUserFormProps {
  purpose: UserFormPurpose;
  isLoading: boolean;
  handleSubmit: (data: IUserFormValues) => void;
}

export const UserForm = ({ purpose, handleSubmit, isLoading }: IUserFormProps) => {
  const history = useHistory();

  const formik = useFormik<IUserFormValues>({
    initialValues: {
      email: FORM_INIT_VAL.INPUT_EMAIL,
      password: `${
        purpose === UserFormPurpose.REGISTER ? FORM_INIT_VAL.CREATE_PASS : FORM_INIT_VAL.INPUT_PASS
      }`,
      confPass: FORM_INIT_VAL.CONF_PASS
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      // if (purpose === UserFormPurpose.REGISTER) actions.resetForm();
    }
  });

  return (
    <Styled.FormContainer onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="emai"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      {purpose === UserFormPurpose.REGISTER && (
        <TextField
          fullWidth
          id="confPass"
          type="password"
          name="confPass"
          label="Confirm password"
          value={formik.values.confPass}
          onChange={formik.handleChange}
          error={formik.touched.confPass && Boolean(formik.errors.confPass)}
          helperText={formik.touched.confPass && formik.errors.confPass}
        />
      )}
      <Styled.ButtonContainer>
        <Button purpose={PURPOSE.REGULAR} type="button" onClick={() => history.goBack()}>
          Back
        </Button>
        <Button purpose={PURPOSE.REGULAR} type="submit">
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </Styled.ButtonContainer>
      <Styled.FormLink
        to={purpose === UserFormPurpose.LOGIN ? ROUTER_KEYS.REGISTER : ROUTER_KEYS.LOGIN}
      >
        Go to {purpose === UserFormPurpose.LOGIN ? 'registration' : 'login'}
      </Styled.FormLink>
    </Styled.FormContainer>
  );
};
