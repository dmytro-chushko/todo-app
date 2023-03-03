import React from 'react';
import { Button } from '../../../common/components/button';
import { TodoForm } from '../todo-form';
import { ModalWindow } from '../modal';
import { useAddTodo } from '../../../common/hooks/add-todo.hook';
import { useModalControl } from '../../../common/hooks/modal-control.hook';
import { PURPOSE } from '../../../common/components/button/types';
import { FormPurpose } from '../../types/todo-list.types';

export const AddTodo = () => {
  const { open, handleOpen, handleClose } = useModalControl();
  const { isLoading, handleSubmit } = useAddTodo({ handleClose });

  return (
    <>
      <Button purpose={PURPOSE.REGULAR} type="button" onClick={handleOpen}>
        Add
      </Button>
      <ModalWindow open={open} onClose={handleClose}>
        <TodoForm purpose={FormPurpose.ADD} isLoading={isLoading} handleSubmit={handleSubmit} />
      </ModalWindow>
    </>
  );
};
