import React from 'react';
import { Controls } from '../controls';

import * as Styled from './todo-card.styled';

interface ITodoCardProps {
  title: string;
  description: string;
}

export const TodoCard = ({ title, description }: ITodoCardProps) => (
  <Styled.TodoItem>
    <Styled.TodoTitle>{title}</Styled.TodoTitle>
    <Styled.TodoDescription>{description}</Styled.TodoDescription>
    <Controls />
  </Styled.TodoItem>
);

export default TodoCard;
