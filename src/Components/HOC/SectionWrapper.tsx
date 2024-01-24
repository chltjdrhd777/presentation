import { motion, HTMLMotionProps } from 'framer-motion';

import { staggerContainer } from 'utils/motion';
import { PropsWithChildren } from 'react';

interface StarWrapperProps extends HTMLMotionProps<'section'> {
  idName: string;
}

export const SectionWrapper: React.FC<PropsWithChildren<StarWrapperProps>> = ({
  idName,
  children,
  ...rest
}) => {
  return (
    <motion.section
      variants={staggerContainer() as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...rest}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
};
