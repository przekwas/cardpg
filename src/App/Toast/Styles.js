import styled from 'styled-components';

import { zIndexValues } from '../../shared/utils/styles';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
`;

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 5px;
  width: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  background: red;
  cursor: pointer;
  transition: all 0.15s;
  &.cardpg-toast-enter,
  &.cardpg-toast-exit.cardpg-toast-exit-active {
    opacity: 0;
    right: -10px;
  }
  &.cardpg-toast-exit,
  &.cardpg-toast-enter.cardpg-toast-enter-active {
    opacity: 1;
    right: 0;
  }
`;

// export const CloseIcon = styled(Icon)`
//   position: absolute;
//   top: 13px;
//   right: 14px;
//   font-size: 22px;
//   cursor: pointer;
//   color: #fff;
// `;

export const Title = styled.div`
  padding-right: 22px;
`;

export const Message = styled.div`
  padding: 8px 10px 0 0;
  white-space: pre-wrap;
`;