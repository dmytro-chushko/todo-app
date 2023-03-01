import styled from 'styled-components';
import { COLORS, FONTS, SIZES, SPACES } from '../theme';

export const TodoTitle = styled.h1`
  font-size: ${FONTS.SIZES.l};
  margin-bottom: ${SIZES.HEIGHT.m};
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
