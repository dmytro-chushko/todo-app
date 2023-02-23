import React from 'react';
import { Container } from '@mui/material';
import Header from '../../common/components/header/header.component';
import OperationsBar from '../../common/components/operations-bar/operations-bar.component';

const TodoPageContainer = () => (
  <Container>
    <Header />
    <OperationsBar />
  </Container>
);

export default TodoPageContainer;
