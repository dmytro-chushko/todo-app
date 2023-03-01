import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, SIZES, SPACES } from '../../../theme';

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

export const FormLink = styled(Link)`
  font-size: ${SPACES.l};
  color: ${COLORS.buttonColor};

  :hover {
    color: ${COLORS.hoverButtonColor};
  }
`;
