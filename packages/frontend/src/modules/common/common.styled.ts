import styled, { css } from 'styled-components';
import { SIZES, SPACES } from '../theme';

interface IStartContainer {
  home?: boolean;
}

export const StartContainer = styled.div<IStartContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${SIZES.STAT_CONT.HEIGHT};
  width: ${SIZES.STAT_CONT.WIDTH};
  padding: 0 ${SPACES.l};
  ${({ home }) =>
    home &&
    css`
      gap: ${SPACES.l};
    `};
`;

export const FormTitle = styled.h1`
  margin-bottom: ${SPACES.l};
`;
