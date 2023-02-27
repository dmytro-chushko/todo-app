import styled from 'styled-components';
import { SPACES } from '../../../theme';

export const SwitchersContainer = styled.div`
  display: grid;
  gap: ${SPACES.m};
  margin-bottom: 150px;
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
