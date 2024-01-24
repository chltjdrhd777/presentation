import { ReactNode } from 'react';
import ReactDom from 'react-dom';
import Modal from './Modal';

interface Props {
  children: ReactNode;
  onClose: (...args: any) => any;
}

const ModalPortal = ({ children, onClose }: Props) => {
  const el = document.getElementById('modal-root') as HTMLElement;
  return ReactDom.createPortal(<Modal onClose={onClose}>{children}</Modal>, el);
};

export default ModalPortal;
