import { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';

export default function useKeyboard() {
  const navigation = useNavigation();
  console.log(navigation);

  //   const handleKeyboard = (e) => {};

  useEffect(() => {
    // window.addEventListener(('kye'))
  }, []);
}
