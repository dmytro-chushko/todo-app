import React from 'react';
import TodoCard from '../todo-card/todo-card.component';

import * as Styled from './todo-container.styled';

const TodoContainer = () => (
  <Styled.TodoCardList>
    <TodoCard title="Title 1" description="description" />
  </Styled.TodoCardList>
);

export default TodoContainer;
