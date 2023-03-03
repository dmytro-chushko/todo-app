import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Header } from '../common/components/header';
import { OperationsBar } from './components/operations-bar';
import { TodoContainer } from './components/todo-container';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import { queryClient } from '../react-query/qeury-client';
import { IFilter } from './types/todo-list.types';

const TodoPageContainer = () => {
  const [filter, setFilter] = useState<IFilter>({
    search: '',
    status: ''
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
  }, []);

  return (
    <Container>
      <Header />
      <OperationsBar setFilter={setFilter} />
      <TodoContainer filter={filter} />
    </Container>
  );
};

export default TodoPageContainer;
