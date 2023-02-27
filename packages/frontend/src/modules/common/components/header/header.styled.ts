import styled from 'styled-components';
import { SPACES } from '../../../theme';
import { MEDIA_KEYS } from '../../consts/app-keys.const';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${SPACES.m};
  padding-bottom: ${SPACES.s};
  margin-bottom: ${SPACES.l};

  @media (${MEDIA_KEYS.MIN_TABLET}) {
    justify-content: end;
  }
`;
