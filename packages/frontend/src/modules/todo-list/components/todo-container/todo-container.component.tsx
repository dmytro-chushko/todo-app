import React from 'react';
import { useMediaQuery } from '@mui/material';
import { TodoCard } from '../todo-card';
import { useGetTodo } from '../../../common/hooks/get-all-todo.hook';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';

import * as Styled from './todo-container.styled';
import { TabletSlider } from '../tablet-slider';
import { DesktopTable } from '../desktop-table';
import { IFilter } from '../../types/todo-list.types';

interface ITodoContainer {
  filter: IFilter;
}

export const TodoContainer = ({ filter }: ITodoContainer) => {
  const isTablet = useMediaQuery(`(${MEDIA_KEYS.MIN_TABLET}) and (${MEDIA_KEYS.MAX_TABLET})`);
  const isDesktop = useMediaQuery(`(${MEDIA_KEYS.MIN_DESKTOP})`);
  const { data, isLoading } = useGetTodo(filter);

  if (isDesktop) return <DesktopTable data={data} isLoading={isLoading} />;

  if (isTablet) return <TabletSlider data={data} isLoading={isLoading} />;

  return (
    <Styled.TodoCardList>
      {data &&
        data.map(({ _id, title, description, isPrivate, isCompleted }) => (
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
