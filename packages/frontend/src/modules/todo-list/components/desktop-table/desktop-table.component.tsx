import React from 'react';
import { Table, TableHead, TableRow, TableBody } from '@mui/material';
import { ITodo } from '../../../common/types/todo.types';
import { Controls } from '../controls';

import * as Styled from './desktop.styled';

interface IDesktopTable {
  data?: ITodo[];
  isLoading: boolean;
  totalPages?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const DesktopTable = ({ data, totalPages, setPage, isLoading }: IDesktopTable) => {
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
        <Styled.TodoPagination
          count={totalPages}
          shape="rounded"
          variant="outlined"
          onChange={(_, page) => setPage(page)}
        />
      </Styled.TodoTableContainer>
    );
  }

  return <p>Loading...</p>;
};
