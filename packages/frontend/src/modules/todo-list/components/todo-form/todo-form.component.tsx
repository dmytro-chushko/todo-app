import React from 'react';
import { useFormik } from 'formik';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import { ITodoFormValues } from '../../../common/types/todo.types';
import { Button } from '../../../common/components/button';
import { todoSchema } from '../validation/todo.schema';
import { PURPOSE } from '../../../common/components/button/types';
import { FormPurpose } from '../../types/todo-list.types';

import * as Styled from './todo-form.styled';

interface ITodoForm {
  initialValues?: ITodoFormValues;
  handleSubmit: (data: ITodoFormValues) => void;
  isLoading?: boolean;
  purpose: FormPurpose;
}

export const TodoForm = ({
  initialValues = {
    title: '',
    description: '',
    isPrivate: false
  },
  handleSubmit,
  isLoading,
  purpose
}: ITodoForm) => {
  const formik = useFormik<ITodoFormValues>({
    initialValues,
    validationSchema: todoSchema,
    onSubmit: (values, actions) => {
      handleSubmit(values);
      if (purpose === FormPurpose.ADD) actions.resetForm();
    }
  });

  return (
    <Styled.Form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="title"
        name="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        fullWidth
        id="description"
        name="description"
        label="Description"
        multiline
        rows={4}
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <FormControlLabel
        control={
          <Checkbox
            id="isPrivate"
            name="isPrivate"
            checked={formik.values.isPrivate}
            onChange={formik.handleChange}
          />
        }
        label="Private"
      />
      {purpose === FormPurpose.EDIT && (
        <FormControlLabel
          control={
            <Checkbox
              id="isCompleted"
              name="isCompleted"
              checked={formik.values.isCompleted}
              onChange={formik.handleChange}
            />
          }
          label="Completed"
        />
      )}
      <Button purpose={PURPOSE.REGULAR} type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>
    </Styled.Form>
  );
};
