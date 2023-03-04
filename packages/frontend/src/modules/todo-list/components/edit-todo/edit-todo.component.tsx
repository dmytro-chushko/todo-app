import React from 'react';
import { ModeEdit } from '@mui/icons-material';
import { Button } from '../../../common/components/button';
import { ModalWindow } from '../modal';
import { TodoForm } from '../todo-form';
import { useModalControl } from '../../../common/hooks/modal-control.hook';
import { ITodoFormValues } from '../../../common/types/todo.types';
import { useEditTodo } from '../../../common/hooks/edit-todo.hook';
import { PURPOSE } from '../../../common/components/button/types';
import { FormPurpose } from '../../types/todo-list.types';

interface IEditTodo {
  id: string;
  initialValues: ITodoFormValues;
}

export const EditTodo = ({ id, initialValues }: IEditTodo) => {
  const { open, handleOpen, handleClose } = useModalControl();
  const { handleSubmit, isLoading } = useEditTodo({ id });

  return (
    <>
      <Button purpose={PURPOSE.ICON} type="button" onClick={handleOpen}>
        <ModeEdit fontSize="small" />
      </Button>
      <ModalWindow open={open} onClose={handleClose}>
        <TodoForm
          purpose={FormPurpose.EDIT}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          id={id}
        />
      </ModalWindow>
    </>
  );
};
