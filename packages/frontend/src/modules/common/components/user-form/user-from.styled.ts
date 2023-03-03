import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, SIZES, SPACES } from '../../../theme';
import { MEDIA_KEYS } from '../../consts/app-keys.const';

export const FormContainer = styled.form`
  display: grid;
  gap: ${SPACES.m};
  width: ${SIZES.USER_FORM.WIDTH};

  @media (${MEDIA_KEYS.MIN_TABLET}) {
    width: ${SIZES.MODAL.MOBILE};
  }

  @media (${MEDIA_KEYS.MIN_DESKTOP}) {
    width: ${SIZES.MODAL.DESKTOP};
  }
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
