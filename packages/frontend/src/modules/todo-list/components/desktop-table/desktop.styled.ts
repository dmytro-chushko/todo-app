import styled from 'styled-components';
import { TableRow, TableCell, tableCellClasses, TableContainer } from '@mui/material';
import { COLORS } from '../../../theme';

export const TodoTableCell = styled(TableCell)`
  :nth-of-type(2) {
    width: 40%;
  }

  &.${tableCellClasses.head} {
    background-color: ${COLORS.secondary};
    color: ${COLORS.lightGray};

    :last-of-type {
      text-align: center;
    }
  }
`;

export const TodoRableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: ${COLORS.lightGray};
  }
`;

export const TodoTableContainer = styled(TableContainer)`
  border-radius: 5px;
`;
