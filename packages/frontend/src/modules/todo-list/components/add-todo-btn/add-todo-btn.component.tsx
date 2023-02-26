import React, { useState } from 'react';
import { Button } from '../../../common/components/button';
import { AddTodoForm } from '../add-todo-form';
import { ModalWindow } from '../modal';

export const AddTodoBtn = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Button purpose="regular" type="button" onClick={handleOpen}>
        Add
      </Button>
      <ModalWindow open={open} onClose={handleClose}>
        <AddTodoForm />
      </ModalWindow>
    </>
  );
};
