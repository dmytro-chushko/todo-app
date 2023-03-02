import styled from 'styled-components';
import { SPACES } from '../../../theme';

export const Form = styled.form`
  display: grid;
  gap: ${SPACES.m};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
