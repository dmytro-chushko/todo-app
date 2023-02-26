import React from 'react';
import { Controls } from '../controls';

import * as Styled from './todo-card.styled';

interface ITodoCardProps {
  id: string;
  title: string;
  description: string;
  isPrivate: boolean;
  isCompleted: boolean;
}

export const TodoCard = ({ id, title, description, isPrivate, isCompleted }: ITodoCardProps) => (
  <Styled.TodoItem>
    <Styled.TodoTitle>{title}</Styled.TodoTitle>
    <Styled.TodoDescription>{description}</Styled.TodoDescription>
    <Controls
      id={id}
      isCompleted={isCompleted}
      initialValues={{ title, description, isPrivate, isCompleted }}
    />
  </Styled.TodoItem>
);

export default TodoCard;
