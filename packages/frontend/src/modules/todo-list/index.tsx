import React from 'react';
import { Container } from '@mui/material';
import { Header } from './components/header';
import { OperationsBar } from './components/operations-bar';
import { TodoContainer } from './components/todo-container';

const TodoPageContainer = () => (
  <Container>
    <Header />
    <OperationsBar />
    <TodoContainer />
  </Container>
);

export default TodoPageContainer;
