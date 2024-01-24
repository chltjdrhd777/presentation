import { Variants } from 'framer-motion';

export type AnimationDirectionType = 'left' | 'right' | 'up' | 'down' | '';

export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeInCustom = (
  direction: AnimationDirectionType,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
        staggerChildren: 0.5,
      },
    },
  };
};

export const fadeIn: (delay?: number) => Variants = (delay) => ({
  hidden: {
    opacity: 0,
    x: '10',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: delay,
    },
  },
});

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const slideIn = (
  direction: AnimationDirectionType,
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: any[],
  delayChildren?: any[],
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren ?? [],
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const hoverScale = {
  scale: 1.2,
  opacity: 1,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};

export const spinningFadeIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    x: -50,
    y: -50,
    rotate: 180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotate: -45,
  },
};
