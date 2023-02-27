import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../theme';

export const TodoTitle = styled.h1`
  font-size: ${FONTS.SIZES.l};
  margin-bottom: 100px;
`;

export const DescriptionLable = styled.p`
  font-size: ${FONTS.SIZES.m};
  margin-bottom: ${SPACES.l};
`;

export const DescriptionBody = styled.p`
  margin-bottom: ${SPACES.l};
  font-size: ${FONTS.SIZES.mobileDescription};
  color: ${COLORS.secondary};
`;
