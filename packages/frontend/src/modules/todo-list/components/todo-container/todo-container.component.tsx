import React from 'react';
import { TodoCard } from '../todo-card';
import { useGetTodo } from '../../hooks/get-todo.hook';

import * as Styled from './todo-container.styled';

export const TodoContainer = () => {
  const { data } = useGetTodo();

  return (
    <Styled.TodoCardList>
      {data &&
        data.map(({ _id, title, description, isCompleted }) => (
          <TodoCard
            key={_id}
            id={_id}
            title={title}
            description={description}
            isCompleted={isCompleted}
          />
        ))}
    </Styled.TodoCardList>
  );
};

export default TodoContainer;
