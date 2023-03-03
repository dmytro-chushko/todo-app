import React from 'react';
import { ModalWindow } from '../../../todo-list/components/modal';
import { useModalControl } from '../../hooks/modal-control.hook';
import { Button } from '../button';
import { PURPOSE } from '../button/types';
import { PassForm } from '../pass-form';

export const MyProfile = () => {
  const { open, handleOpen, handleClose } = useModalControl();

  return (
    <>
      <Button purpose={PURPOSE.HEADER} type="button" onClick={handleOpen}>
        My Profile
      </Button>
      <ModalWindow open={open} onClose={handleClose}>
        <PassForm />
      </ModalWindow>
    </>
  );
};
