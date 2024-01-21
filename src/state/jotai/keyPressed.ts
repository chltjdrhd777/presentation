import { atom } from 'jotai';

interface KeyboardPressType {
  key: string;
  isAnimating: boolean;
}

const initialState: KeyboardPressType = {
  key: '',
  isAnimating: false,
};

const keyboard = atom<KeyboardPressType>(initialState);
