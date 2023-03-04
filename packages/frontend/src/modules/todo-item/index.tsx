import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from '../common/components/header';
import { Button } from '../common/components/button';
import { PURPOSE } from '../common/components/button/types';
import { useGetTodoById } from '../common/hooks/get-one-todo.hook';
import { QUERY_KEYS, ROUTER_KEYS } from '../common/consts/app-keys.const';
import { SwitchersBlock } from './components/switchers-block';
import { queryClient } from '../react-query/qeury-client';

import * as Styled from './todo-item.styled';
import { useGetUser } from '../common/hooks/get-user.hook';

interface IParams {
  id: string;
}

export const TodoItemPageContainer = () => {
  const { id } = useParams<IParams>();
  const history = useHistory();
  const { data, isLoading } = useGetTodoById(id);
  const { data: user } = useGetUser();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
  }, []);

  return (
    <Container>
      <Header />
      <Styled.TodoTitle>{isLoading ? 'Loading...' : data?.title}</Styled.TodoTitle>
      <Styled.DescriptionLable>Description</Styled.DescriptionLable>
      <Styled.DescriptionBody>{isLoading ? 'Loading' : data?.description}</Styled.DescriptionBody>
      <SwitchersBlock
        id={id}
        userId={user?._id}
        todoUserId={data?.userId}
        isCompleted={!!data?.isCompleted}
        isPrivate={!!data?.isPrivate}
        isLoading={isLoading}
      />
      <Button purpose={PURPOSE.BACK} type="button" onClick={() => history.push(ROUTER_KEYS.TODO)}>
        Back
      </Button>
    </Container>
  );
};

export default TodoItemPageContainer;
