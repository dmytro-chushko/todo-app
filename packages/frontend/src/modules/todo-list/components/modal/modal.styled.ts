import styled from 'styled-components';
import { MEDIA_KEYS } from '../../../common/consts/app-keys.const';
import { COLORS, SPACES } from '../../../theme';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: ${COLORS.white};
  border-radius: 5px;
  padding: ${SPACES.l};
  outline: none;

  @media (${MEDIA_KEYS.MIN_TABLET}) {
    width: 400px;
  }

  @media (${MEDIA_KEYS.MIN_DESKTOP}) {
    width: 600px;
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
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
