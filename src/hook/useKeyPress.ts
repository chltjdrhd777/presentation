import { initialKeyPressState, keyPressAtom } from 'atom/jotai/keyPress';
import { useAtom } from 'jotai';

export default function useKeyPress() {
  const [keyPress, setKeyPress] = useAtom(keyPressAtom);

  const resetKeyPress = () => setKeyPress(initialKeyPressState);

  return {
    keyPress,
    setKeyPress,
    resetKeyPress,
  };
}
