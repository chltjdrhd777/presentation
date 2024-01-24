import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { Tilt } from 'react-tilt';
import { fadeInCustom } from 'utils/motion';

export default function Card({
  index,
  text,
  children,
}: PropsWithChildren<{ index: number; text: string }>) {
  return (
    <Tilt>
      <CardContainer
        variants={fadeInCustom('right', 'spring', index * 0.5, 0.75)}
        initial="hidden"
        whileInView={'visible'}
        viewport={{ once: true, amount: 0.25 }}
      >
        {children}
        <span className="text">{text}</span>
      </CardContainer>
    </Tilt>
  );
}

export const CardContainer = styled(motion.div)`
  width: 30rem;
  height: 50rem;
  border-radius: 70px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & .text {
    position: absolute;
    bottom: 10%;
    transform: translateX(-50%);
    left: 50%;
    font-size: 2rem;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors['white-0']};

    z-index: 100;
    padding: 1rem 2rem;
    /* background-color: ${({ theme }) => theme.colors.pointTeal}; */
    color: ${({ theme }) => theme.colors.pointGreen};
    border: 1px solid ${({ theme }) => theme.colors['black-0']};
    border-radius: 17px;
  }
`;
