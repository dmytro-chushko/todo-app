import React from 'react';
import { TodoCard } from '../todo-card';
import { useTodoApi } from '../../hooks/todo-api.hook';

import * as Styled from './todo-container.styled';

export const TodoContainer = () => {
  const { data } = useTodoApi();

  return (
    <Styled.TodoCardList>
      {data &&
        data.map(({ _id, title, description }) => (
          <TodoCard key={_id} title={title} description={description} />
        ))}
    </Styled.TodoCardList>
  );
};

export default TodoContainer;
