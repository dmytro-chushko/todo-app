import styled from 'styled-components';
import { SIZES, SPACES } from '../../theme';

export const FormContainer = styled.form`
  display: grid;
  gap: ${SPACES.m};
  width: ${SIZES.USER_FORM.WIDTH};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
