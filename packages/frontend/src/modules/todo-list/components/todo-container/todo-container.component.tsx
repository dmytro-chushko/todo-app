import React from 'react';
import { TodoCard } from '../todo-card';
import { useGetTodo } from '../../hooks/get-todo.hook';

import * as Styled from './todo-container.styled';
import { useSearch } from '../../hooks/useSearch.hook';

interface ITodoContainer {
  searchTerm: string;
}

export const TodoContainer = ({ searchTerm }: ITodoContainer) => {
  const { data } = useGetTodo();
  const searchedData = useSearch({ data, searchTerm });

  return (
    <Styled.TodoCardList>
      {searchedData &&
        searchedData.map(({ _id, title, description, isCompleted }) => (
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
