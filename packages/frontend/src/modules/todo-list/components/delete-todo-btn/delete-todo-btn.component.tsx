import React from 'react';
import { Button } from '../../../common/components/button';
import { PURPOSE } from '../../../common/components/button/types';
import { useDeleteTodo } from '../../../hooks/delete-todo.hook';

interface IDeleteTodoBtn {
  id: string;
}

export const DeleteTodoBtn = ({ id }: IDeleteTodoBtn) => {
  const { handleDelete, isLoading } = useDeleteTodo(id);

  return (
    <Button purpose={PURPOSE.REGULAR} type="button" onClick={handleDelete}>
      {isLoading ? 'Loading...' : 'Delete'}
    </Button>
  );
};
