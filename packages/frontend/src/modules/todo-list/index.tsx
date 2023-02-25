import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Header } from './components/header';
import { OperationsBar } from './components/operations-bar';
import { TodoContainer } from './components/todo-container';

const TodoPageContainer = () => {
  const [searchTerm, setSearchTernm] = useState<string>('');

  return (
    <Container>
      <Header />
      <OperationsBar searchTerm={searchTerm} setSearchTernm={setSearchTernm} />
      <TodoContainer searchTerm={searchTerm} />
    </Container>
  );
};

export default TodoPageContainer;
