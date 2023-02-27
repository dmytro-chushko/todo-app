import styled from 'styled-components';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';
import { SPACES } from '../../../theme';

export const OperatoionsContainer = styled.div`
  padding: ${SPACES.s} 0;

  @media (${MEDIA_KEYS.MIN_TABLET}) {
    display: flex;
    gap: ${SPACES.m};
    align-items: flex-start;
    justify-content: space-between;
  } ;
`;

export const OperationsWrapper = styled.div`
  @media (${MEDIA_KEYS.MAX_MOBILE}) {
    margin-bottom: ${SPACES.m};
  }

  @media (${MEDIA_KEYS.MIN_TABLET}) {
    flex-direction: column;
    gap: ${SPACES.m};
    align-items: flex-end;
    order: 2;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
