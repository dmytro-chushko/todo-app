import React from 'react';
import Modal, { ModalProps } from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import * as Styled from './modal.styled';

export const ModalWindow: React.FC<ModalProps> = ({ children, open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <Styled.ModalContainer>
      {children}
      <Styled.CloseButton onClick={(e) => onClose && onClose(e, 'backdropClick')}>
        <CloseIcon fontSize="small" />
      </Styled.CloseButton>
    </Styled.ModalContainer>
  </Modal>
);
