import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../theme';

export const TodoTitle = styled.h2`
  font-size: ${FONTS.SIZES.l};
  margin-bottom: ${SPACES.s};
`;

export const TodoDescription = styled.p`
  font-size: ${FONTS.SIZES.mobileDescription};
  color: ${COLORS.secondary};
`;

export const TodoItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${SPACES.m};
  }
`;
