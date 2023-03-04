import React from 'react';
import { Button } from '../../../common/components/button';
import { PURPOSE } from '../../../common/components/button/types';
import { useDeleteTodo } from '../../../common/hooks/delete-todo.hook';
import { useGetTodoById } from '../../../common/hooks/get-one-todo.hook';
import { useGetUser } from '../../../common/hooks/get-user.hook';

interface IDeleteTodoBtn {
  id: string;
}

export const DeleteTodoBtn = ({ id }: IDeleteTodoBtn) => {
  const { data } = useGetUser();
  const { handleDelete, isLoading } = useDeleteTodo(id);
  const { data: todo } = useGetTodoById(id);

  return (
    <Button
      purpose={PURPOSE.REGULAR}
      type="button"
      onClick={handleDelete}
      disabled={!todo?.isPrivate && data?._id !== todo?.userId}
    >
      {isLoading ? 'Loading...' : 'Delete'}
    </Button>
  );
};
