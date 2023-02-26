import React from 'react';
import { TodoCard } from '../todo-card';
import { useGetTodo } from '../../../hooks/get-all-todo.hook';

import * as Styled from './todo-container.styled';
import { useSearch } from '../../../hooks/search.hook';
import { useFilter } from '../../../hooks/filter.hook';

interface ITodoContainer {
  searchTerm: string;
  filterValue: string | null;
}

export const TodoContainer = ({ searchTerm, filterValue }: ITodoContainer) => {
  const { data } = useGetTodo();
  const searchedData = useSearch({ data, searchTerm });
  const filteredData = useFilter({ data: searchedData, filterValue });

  return (
    <Styled.TodoCardList>
      {filteredData &&
        filteredData.map(({ _id, title, description, isPrivate, isCompleted }) => (
          <TodoCard
            key={_id}
            id={_id}
            title={title}
            description={description}
            isCompleted={isCompleted}
            isPrivate={isPrivate}
          />
        ))}
    </Styled.TodoCardList>
  );
};

export default TodoContainer;
