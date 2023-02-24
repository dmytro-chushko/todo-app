import React from 'react';
import { Container } from '@mui/material';
import Header from '../../common/components/header/header.component';
import OperationsBar from '../../common/components/operations-bar/operations-bar.component';
import TodoContainer from '../../common/components/todo-container';

const TodoPageContainer = () => (
  <Container>
    <Header />
    <OperationsBar />
    <TodoContainer />
  </Container>
);

export default TodoPageContainer;
