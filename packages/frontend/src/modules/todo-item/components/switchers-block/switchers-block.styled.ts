import styled from 'styled-components';
import { SIZES, SPACES } from '../../../theme';

export const SwitchersContainer = styled.div`
  display: grid;
  gap: ${SPACES.m};
  margin-bottom: ${SIZES.HEIGHT.l};
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
