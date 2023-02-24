import styled from 'styled-components';
import { SPACES } from '../../../theme';

export const CtrlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CtrlWrapper = styled(CtrlContainer)`
  justify-content: center;
  gap: ${SPACES.m};
`;
