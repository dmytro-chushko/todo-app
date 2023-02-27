import styled from 'styled-components';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';
import { COLORS, SIZES, SPACES } from '../../../theme';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 0;
  border-radius: 50%;
  border: none;
  color: ${COLORS.white};
  background-color: ${COLORS.buttonColor};
  line-height: 0;
  transition: all ease-in-out 0.4s;

  :hover {
    background-color: ${COLORS.hoverButtonColor};
    box-shadow: ${SIZES.BOX_SHADOW};
  }
`;
