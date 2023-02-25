import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Header } from './components/header';
import { OperationsBar } from './components/operations-bar';
import { TodoContainer } from './components/todo-container';
import { FILTER_KEYS } from '../common/consts/app-keys.const';

const TodoPageContainer = () => {
  const [searchTerm, setSearchTernm] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string | null>(FILTER_KEYS.ALL);

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
