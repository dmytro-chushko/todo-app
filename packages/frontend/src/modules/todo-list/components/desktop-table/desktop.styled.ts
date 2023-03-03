import styled from 'styled-components';
import { TableRow, TableCell, tableCellClasses, TableContainer, Pagination } from '@mui/material';
import { COLORS, SIZES, SPACES } from '../../../theme';

export const TodoTableCell = styled(TableCell)`
  :nth-of-type(2) {
    width: ${SIZES.DESCR_TABLE_WIDTH};
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
  border-radius: ${SIZES.BORDER_RADIUS};
`;

export const TodoPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  padding-top: ${SPACES.s};
  padding-bottom: ${SPACES.s};
`;
