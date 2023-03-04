import styled from 'styled-components';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';
import { COLORS, FONTS, SIZES, SPACES } from '../../../theme';

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
    height: ${SIZES.CARD.HEIGHT};
    padding: ${SPACES.s};
    border: ${SIZES.CARD.BORDER} solid ${COLORS.secondary};
    border-radius: ${SIZES.BORDER_RADIUS};

    :not(:last-of-type) {
      margin-right: ${SPACES.m};
    }
  }

  :not(:last-child) {
    margin-bottom: ${SPACES.m};
  }
`;
