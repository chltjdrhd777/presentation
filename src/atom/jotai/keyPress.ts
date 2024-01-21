import { atomWithImmer } from 'jotai-immer';

interface KeyPressType {
  key: string;
  isAnimating: boolean;
}

export const initialKeyPressState: KeyPressType = {
  key: '',
  isAnimating: false,
};

export const keyPressAtom = atomWithImmer<KeyPressType>(initialKeyPressState);
