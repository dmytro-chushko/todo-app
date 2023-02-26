import React from 'react';
import { ModeEdit } from '@mui/icons-material';
import { Button } from '../../../common/components/button';
import { ModalWindow } from '../modal';
import { TodoForm } from '../todo-form';
import { useModalControl } from '../../hooks/modal-control.hook';
import { FormPurpose, ITodoFormValues } from '../../types/todo.types';
import { useEditTodo } from '../../hooks/edit-todo.hook';

interface IEditTodo {
  id: string;
  initialValues: ITodoFormValues;
}

export const EditTodo = ({ id, initialValues }: IEditTodo) => {
  const { open, handleOpen, handleClose } = useModalControl();
  const { handleSubmit, isLoading } = useEditTodo({ id });

  return (
    <>
      <Button purpose="icon" type="button" onClick={handleOpen}>
        <ModeEdit fontSize="small" />
      </Button>
      <ModalWindow open={open} onClose={handleClose}>
        <TodoForm
          purpose={FormPurpose.EDIT}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </ModalWindow>
    </>
  );
};
