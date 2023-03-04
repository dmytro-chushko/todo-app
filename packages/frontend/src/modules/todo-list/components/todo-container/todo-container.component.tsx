import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { TodoCard } from '../todo-card';
import { useGetTodo } from '../../../common/hooks/get-all-todo.hook';
import { MEDIA_KEYS, QUERY_KEYS } from '../../../common/consts/app-keys.const';

import * as Styled from './todo-container.styled';
import { TabletSlider } from '../tablet-slider';
import { DesktopTable } from '../desktop-table';
import { IFilter } from '../../types/todo-list.types';
import { queryClient } from '../../../react-query/qeury-client';

interface ITodoContainer {
  filter: IFilter;
}

export const TodoContainer = ({ filter }: ITodoContainer) => {
  const { inView, ref } = useInView();
  const isTablet = useMediaQuery(`(${MEDIA_KEYS.MIN_TABLET}) and (${MEDIA_KEYS.MAX_TABLET})`);
  const isDesktop = useMediaQuery(`(${MEDIA_KEYS.MIN_DESKTOP})`);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const { data, isLoading } = useGetTodo(filter, page, limit);

  useEffect(() => {
    if (inView) {
      setLimit((prev) => prev + 1);
    }
  }, [inView]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
  }, []);

  if (isDesktop) {
    return (
      <DesktopTable
        data={data?.todos}
        totalPages={data?.totalPages}
        setPage={setPage}
        isLoading={isLoading}
      />
    );
  }

  if (isTablet) {
    return <TabletSlider data={data?.todos} isLoading={isLoading} setLimit={setLimit} />;
  }

  return (
    <>
      <Styled.TodoCardList>
        {data &&
          data.todos.map(({ _id, title, description, isPrivate, isCompleted }) => (
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
      <div ref={ref} />
    </>
  );
};
export default TodoContainer;
