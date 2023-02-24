import React from 'react';
import TodoCard from '../todo-card/todo-card.component';
import useTodoCard from './todo-container.hook';

import * as Styled from './todo-container.styled';

const TodoContainer = () => {
  const { data } = useTodoCard();

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
