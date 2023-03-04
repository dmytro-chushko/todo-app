import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { Button } from '../button';
import { PURPOSE } from '../button/types';
import { IPassForm } from '../../types';
import { useChangePass } from '../../hooks/change-pass.hook';
import { useLogout } from '../../hooks/loout.hook';
import { useGetUser } from '../../hooks/get-user.hook';

import * as Styled from './pass-form.styled';
import { queryClient } from '../../../react-query/qeury-client';
import { QUERY_KEYS } from '../../consts/app-keys.const';

export const PassForm = () => {
  const logout = useLogout();
  const { data, isLoading: isFetchingUser } = useGetUser();
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

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
  }, []);

  return (
    <Styled.Form onSubmit={formik.handleSubmit}>
      <TextField
        label="Your Email"
        value={isFetchingUser ? 'Loading...' : data?.email}
        InputProps={{
          readOnly: true
        }}
      />
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
