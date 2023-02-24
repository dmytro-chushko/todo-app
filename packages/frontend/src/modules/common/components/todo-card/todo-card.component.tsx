import React from 'react';

import * as Styled from './todo-card.styled';

interface ITodoCardProps {
  title: string;
  description: string;
}

const TodoCard = ({ title, description }: ITodoCardProps) => (
  <Styled.TodoItem>
    <Styled.TodoTitle>{title}</Styled.TodoTitle>
    <Styled.TodoDescription>{description}</Styled.TodoDescription>
  </Styled.TodoItem>
);

export default TodoCard;
