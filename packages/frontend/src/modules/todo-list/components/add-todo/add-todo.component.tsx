import React from 'react';
import { Button } from '../../../common/components/button';
import { TodoForm } from '../todo-form';
import { ModalWindow } from '../modal';
import { useAddTodo } from '../../hooks/add-todo.hook';
import { FormPurpose } from '../../types/todo.types';
import { useModalControl } from '../../hooks/modal-control.hook';

export const AddTodo = () => {
  const { open, handleOpen, handleClose } = useModalControl();
  const { isLoading, handleSubmit } = useAddTodo({ handleClose });

  return (
    <>
      <Button purpose="regular" type="button" onClick={handleOpen}>
        Add
      </Button>
      <ModalWindow open={open} onClose={handleClose}>
        <TodoForm purpose={FormPurpose.ADD} isLoading={isLoading} handleSubmit={handleSubmit} />
      </ModalWindow>
    </>
  );
};
