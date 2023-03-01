import { useState } from 'react';

interface IUseModalControl {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export const useModalControl = (): IUseModalControl => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return {
    open,
    handleOpen,
    handleClose
  };
};
