import { useEffect } from 'react';
import Typed, { TypedOptions } from 'typed.js';

export default function useTyped(
  el: any | null,
  strings: string[],
  config: TypedOptions = {
    typeSpeed: 50,
  },
) {
  useEffect(() => {
    if (el) {
      const typed = new Typed(el?.current, { strings, ...config });
    }

    // return () => {
    //   // Destroy Typed instance during cleanup to stop animation
    //   if (el) {
    //     const typed = new Typed(el?.current, config);
    //     typed.destroy();
    //   }
    // };
  }, [el]);
}
