import styled from 'styled-components';
import { SIZES, SPACES } from '../theme';

export const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: ${SIZES.STAT_CONT.HEIGHT};
  width: ${SIZES.STAT_CONT.WIDTH};
  padding: 0 ${SPACES.l};
`;

export const FormTitle = styled.h1`
  margin-bottom: ${SPACES.l};
`;
