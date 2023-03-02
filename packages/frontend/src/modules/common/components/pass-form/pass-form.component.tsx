import React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { Button } from '../button';
import { PURPOSE } from '../button/types';
import { IPassForm } from '../../types';
import { useChangePass } from '../../hooks/change-pass.hook';
import { useLogout } from '../../hooks/loout.hook';

import * as Styled from './pass-form.styled';

export const PassForm = () => {
  const logout = useLogout();
  const { handleSubmit, isLoading } = useChangePass();
  const formik = useFormik<IPassForm>({
    initialValues: {
      oldPassword: '',
      newPassword: ''
    },
    onSubmit: (values, actions) => {
      handleSubmit(values);
      actions.resetForm();
    }
  });

  return (
    <Styled.Form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="oldPassword"
        type="password"
        name="oldPassword"
        label="Old Password"
        value={formik.values.oldPassword}
        onChange={formik.handleChange}
        error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
        helperText={formik.touched.oldPassword && formik.errors.oldPassword}
      />
      <TextField
        fullWidth
        id="newPassword"
        type="password"
        name="newPassword"
        label="New Password"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
      />
      <Styled.ButtonContainer>
        <Button purpose={PURPOSE.REGULAR} type="button" onClick={logout}>
          Logout
        </Button>
        <Button purpose={PURPOSE.REGULAR} type="submit">
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};
