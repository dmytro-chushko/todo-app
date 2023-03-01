import React from 'react';
import { Table, TableHead, TableRow, TableBody } from '@mui/material';
import { ITodo } from '../../../common/types/todo.types';
import { Controls } from '../controls';

import * as Styled from './desktop.styled';

interface IDesktopTable {
  data?: ITodo[];
  isLoading: boolean;
}

export const DesktopTable = ({ data, isLoading }: IDesktopTable) => {
  if (!isLoading) {
    return (
      <Styled.TodoTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <Styled.TodoTableCell>Todo Title</Styled.TodoTableCell>
              <Styled.TodoTableCell>Description</Styled.TodoTableCell>
              <Styled.TodoTableCell>Actions</Styled.TodoTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map(({ _id, title, description, isPrivate, isCompleted }) => (
                <Styled.TodoRableRow key={_id}>
                  <Styled.TodoTableCell>{title}</Styled.TodoTableCell>
                  <Styled.TodoTableCell>{description}</Styled.TodoTableCell>
                  <Styled.TodoTableCell>
                    <Controls
                      id={_id}
                      isCompleted={isCompleted}
                      initialValues={{ title, description, isPrivate, isCompleted }}
                    />
                  </Styled.TodoTableCell>
                </Styled.TodoRableRow>
              ))}
          </TableBody>
        </Table>
      </Styled.TodoTableContainer>
    );
  }

  return <p>Loading...</p>;
};
