import styled from 'styled-components';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';
import { COLORS, SIZES, SPACES } from '../../../theme';

export const ModalContainer = styled.div`
  position: absolute;
  top: ${SIZES.MODAL_POSITION.TOP};
  left: ${SIZES.MODAL_POSITION.LEFT};
  transform: translate(-${SIZES.MODAL_POSITION.TOP}, -${SIZES.MODAL_POSITION.LEFT});
  width: ${SIZES.MODAL.MOBILE};
  background-color: ${COLORS.white};
  border-radius: ${SIZES.BORDER_RADIUS};
  padding: ${SPACES.l};
  outline: none;

  @media (${MEDIA_KEYS.MIN_TABLET}) {
    width: ${SIZES.MODAL.MOBILE};
  }

  @media (${MEDIA_KEYS.MIN_DESKTOP}) {
    width: ${SIZES.MODAL.DESKTOP};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${SIZES.CLOSE_BUTTON.TOP};
  right: ${SIZES.CLOSE_BUTTON.RIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${SIZES.CLOSE_BUTTON.WIDTH};
  height: ${SIZES.CLOSE_BUTTON.HEIGHT};
  padding: 0;
  border-radius: ${SIZES.CLOSE_BUTTON.BORDER_RADIUS};
  border: none;
  color: ${COLORS.white};
  background-color: ${COLORS.buttonColor};
  line-height: 0;
  transition: all ease-in-out ${SIZES.TRANSITION.DURATION};

  :hover,
  :focus {
    background-color: ${COLORS.hoverButtonColor};
    box-shadow: ${SIZES.BOX_SHADOW} ${COLORS.buttonShadow};
  }
`;
