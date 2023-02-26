import React from 'react';
import { useFormik } from 'formik';
import { TextField, FormControlLabel, Checkbox } from '@mui/material';
import { IAddTodo } from '../../types/todo.types';
import { Button } from '../../../common/components/button';

import * as Styled from './add-todo-form.styled';
import { addTodoSchema } from '../validation/add-todo.schema';
import { useAddTodo } from '../../hooks/add-todo.hook';

export const AddTodoForm = () => {
  const { isLoading, handleSubmit } = useAddTodo();
  const formik = useFormik<IAddTodo>({
    initialValues: {
      title: '',
      description: '',
      isPrivate: false
    },
    validationSchema: addTodoSchema,
    onSubmit: handleSubmit
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
            value={formik.values.isPrivate}
            onChange={formik.handleChange}
          />
        }
        label="Private"
      />
      <Button purpose="regular" type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>
    </Styled.Form>
  );
};
