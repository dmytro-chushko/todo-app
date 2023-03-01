import React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { Button } from '../../common/components/button';
import { PURPOSE } from '../../common/components/button/types';
import { UserFormPurpose, IUserFormValues } from '../types/registration.types';
import { FORM_INIT_VAL } from '../../common/consts/app-keys.const';
import { userSchema } from '../validations/user-schema';

import * as Styled from './user-from.styled';

interface IUserFormProps {
  purpose: UserFormPurpose;
}

export const UserForm = ({ purpose }: IUserFormProps) => {
  const formik = useFormik<IUserFormValues>({
    initialValues: {
      email: FORM_INIT_VAL.INPUT_EMAIL,
      password: `${
        purpose === UserFormPurpose.REGISTER ? FORM_INIT_VAL.CREATE_PASS : FORM_INIT_VAL.INPUT_PASS
      }`,
      confPass: FORM_INIT_VAL.CONF_PASS
    },
    validationSchema: userSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
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
        <Button purpose={PURPOSE.REGULAR} type="button">
          Back
        </Button>
        <Button purpose={PURPOSE.REGULAR} type="submit">
          Submit
        </Button>
      </Styled.ButtonContainer>
    </Styled.FormContainer>
  );
};
