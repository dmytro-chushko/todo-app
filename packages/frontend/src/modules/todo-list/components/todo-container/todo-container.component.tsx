import React from 'react';
import { useMediaQuery } from '@mui/material';
import { TodoCard } from '../todo-card';
import { useGetTodo } from '../../../hooks/get-all-todo.hook';
import { useSearch } from '../../../hooks/search.hook';
import { useFilter } from '../../../hooks/filter.hook';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';

import * as Styled from './todo-container.styled';
import { TabletSlider } from '../tablet-slider';

interface ITodoContainer {
  searchTerm: string;
  filterValue: string | null;
}

export const TodoContainer = ({ searchTerm, filterValue }: ITodoContainer) => {
  const isTablet = useMediaQuery(`(${MEDIA_KEYS.MIN_TABLET})`);
  const { data, isLoading } = useGetTodo();
  const searchedData = useSearch({ data, searchTerm });
  const filteredData = useFilter({ data: searchedData, filterValue });

  return isTablet ? (
    <TabletSlider data={filteredData} isLoading={isLoading} />
  ) : (
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
