import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { MainRouter } from '../navigation';
import { queryClient } from '../react-query/qeury-client';

import * as theme from '../theme';
import * as Styled from './app.styled';
import 'react-toastify/dist/ReactToastify.css';
import '../../style.css';

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <Styled.GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <MainRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    <ToastContainer />
  </ThemeProvider>
);

export default AppContainer;
