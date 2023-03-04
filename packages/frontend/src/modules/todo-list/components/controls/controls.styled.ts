import styled from 'styled-components';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';
import { SPACES } from '../../../theme';

export const CtrlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CtrlWrapper = styled(CtrlContainer)`
  justify-content: center;
  gap: ${SPACES.m};

  @media (${MEDIA_KEYS.MIN_TABLET}) and (${MEDIA_KEYS.MAX_TABLET}) {
    gap: ${SPACES.s};
  } ;
`;
