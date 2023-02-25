import React from 'react';
import { Button } from '../../../common/components/button';
import { useDeleteTodo } from '../../hooks/delete-todo.hook';

interface IDeleteTodoBtn {
  id: string;
}

export const DeleteTodoBtn = ({ id }: IDeleteTodoBtn) => {
  const { handleDelete, isLoading } = useDeleteTodo(id);

  return (
    <Button purpose="regular" type="button" onClick={handleDelete}>
      {isLoading ? 'Loading...' : 'Delete'}
    </Button>
  );
};
