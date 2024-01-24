import styled from '@emotion/styled';
import Transition from 'Components/HOC/Transition';
import useGetPathColor from 'hook/useGetPathColor';
import { PathColorType } from 'utils/getPathColor';
import { textVariant } from 'utils/motion';

import { motion } from 'framer-motion';

import Experience from './Experience';
import useResetScroll from 'hook/useResetScroll';

function Works() {
  useResetScroll();

  const pathColor = useGetPathColor();

  return (
    <Section className="section" pathColor={pathColor}>
      <div className="scroll-watcher"></div>

      <div className="box sec-1">
        <motion.h1 variants={textVariant()} initial="hidden" animate="visible">
          그동안 경험해보았던 일들
        </motion.h1>
      </div>

      <div className="box sec-2">
        <Experience />
      </div>
    </Section>
  );
}

export default Transition(Works);

export const Section = styled.section<{ pathColor?: PathColorType }>`
  overflow: auto;
  position: relative;

  & .scroll-watcher {
    background-color: ${({ pathColor }) => pathColor?.active};
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 5rem);

    &.bg {
      background-color: ${({ pathColor }) => pathColor?.bg};
    }

    &.sec-1 h1 {
      font-size: 7.5rem;
    }

    &.sec-2 {
      /* transform: translateY(-30rem); */
      background-color: ${({ pathColor }) => pathColor?.bg};
    }

    &.sec-3 {
      display: flex;
      flex-direction: column;

      & h3 {
        font-size: 3rem;
      }
    }
  }
`;

export const Therapy = styled.div`
  display: flex;
  width: 100%;
`;

export const TherapyImage = styled.div`
  width: 50%;
  height: 100%;
  padding: 5rem 10% 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .image-wrapper {
    width: 50rem;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const TherapyExplanation = styled.div`
  padding-top: 10rem;
  width: 100%;

  & h2 {
    font-size: 5rem;

    & .highlight {
      color: ${({ theme }) => theme.colors.pointEmerald};
    }
  }

  & .but {
    margin-top: 6rem;
    font-size: 3rem;
  }
`;

export const ToolWrapper = styled(motion.div)`
  position: relative;

  & .cache-img {
    position: absolute;
    bottom: 0;
  }
`;
export const ToolImage = styled(motion.div)`
  margin-top: 6rem;
`;

export const CardWrapper = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 10rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;
