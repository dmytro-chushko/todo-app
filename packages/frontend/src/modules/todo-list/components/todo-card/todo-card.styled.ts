import styled from 'styled-components';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';
import { COLORS, FONTS, SPACES } from '../../../theme';

export const TodoTitle = styled.h2`
  font-size: ${FONTS.SIZES.l};
  margin-bottom: ${SPACES.s};
`;

export const TodoDescription = styled.p`
  flex-grow: 3;
  margin-bottom: ${SPACES.m};
  font-size: ${FONTS.SIZES.mobileDescription};
  color: ${COLORS.secondary};
`;

export const TodoItem = styled.li`
  list-style-type: none;

  @media (${MEDIA_KEYS.MIN_TABLET}) and (${MEDIA_KEYS.MAX_TABLET}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    padding: ${SPACES.m};
    border: 2px solid ${COLORS.secondary};
    border-radius: 5px;

    :not(:last-of-type) {
      margin-right: ${SPACES.m};
    }
  }

  :not(:last-child) {
    margin-bottom: ${SPACES.m};
  }
`;
