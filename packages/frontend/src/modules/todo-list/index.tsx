import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Header } from '../common/components/header';
import { OperationsBar } from './components/operations-bar';
import { TodoContainer } from './components/todo-container';
import { FILTER_KEYS, QUERY_KEYS } from '../common/consts/app-keys.const';
import { queryClient } from '../react-query/qeury-client';

const TodoPageContainer = () => {
  const [searchTerm, setSearchTernm] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string | null>(FILTER_KEYS.ALL);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TODO] });
  }, []);

  return (
    <Container>
      <Header />
      <OperationsBar
        searchTerm={searchTerm}
        setSearchTernm={setSearchTernm}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <TodoContainer searchTerm={searchTerm} filterValue={filterValue} />
    </Container>
  );
};

export default TodoPageContainer;
