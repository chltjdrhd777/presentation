import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import MainLayout from 'Components/Layout/MainLayout';

export default function useTransition(Component: FunctionComponent) {
  return () => (
    <MainLayout>
      <Component />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
    </MainLayout>
  );
}
