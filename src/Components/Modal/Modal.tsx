import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export default function Modal({
  children,
  onClose,
}: PropsWithChildren<{
  onClose: (...args: any) => any;
}>) {
  return (
    <>
      <ModalBody>{children}</ModalBody>
      <Overlay onClick={onClose} />
    </>
  );
}

const ModalBody = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -20%) scale(0.7);
  opacity: 0.5;
  z-index: 1000;

  animation: popup 0.3s ease-in-out forwards;

  @keyframes popup {
    0% {
      transform: translateX(-50%, -20%) scale(0.7);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
