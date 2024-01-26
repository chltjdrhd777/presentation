import styled from '@emotion/styled';
import Transition from 'Components/HOC/Transition';
import useGetPathColor from 'hook/useGetPathColor';
import { PathColorType } from 'utils/getPathColor';
import { fadeInCustom, textVariant } from 'utils/motion';

import { motion } from 'framer-motion';

import Shirt from 'Components/Shirt';

import blog1 from '../../image/blog1.png';
import blog2 from '../../image/blog2.png';

import { useEffect, useMemo, useRef, useState } from 'react';
import useScrollMove from 'hook/useScrollMove';
import useResetScroll from 'hook/useResetScroll';

function Studying() {
  const pathColor = useGetPathColor();
  const { ref } = useScrollMove();
  useResetScroll();

  const intersectionRef = useRef<null | HTMLDivElement>(null);
  const [threeProject, setThreeProject] = useState(new Map<number, boolean>());

  const observer = useMemo(() => {
    return new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          console.log('intersecting', entry);
          const copied = new Map(threeProject);
          copied.set(idx, true);
          setThreeProject(copied);
        }
      });
    });
  }, []);

  useEffect(() => {
    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }
  }, []);

  return (
    <Section className="section" pathColor={pathColor}>
      <div className="scroll-watcher"></div>

      <div className="box sec-1">
        <motion.h1 variants={textVariant()} initial="hidden" animate="visible">
          자기계발 및 발전
        </motion.h1>
      </div>

      <div className="box sec-2" ref={ref}>
        <motion.div
          className="blogging"
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="blogimg" variants={fadeInCustom('up', 'spring', 0.5, 1.5)}>
            <img src={blog1} alt="" />
          </motion.div>
          <motion.div className="blogimg" variants={fadeInCustom('up', 'spring', 1, 1.5)}>
            <img src={blog2} alt="" />
          </motion.div>
        </motion.div>
      </div>

      <div ref={intersectionRef} className="box sec-3">
        {threeProject.has(0) && <Shirt />}
      </div>
    </Section>
  );
}

export default Transition(Studying);

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
      & .blogging {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;

        & .blogimg {
          width: 80rem;
          height: 80rem;
          border: 3px solid ${({ theme }) => theme.colors['black-0']};

          & img {
            width: 100%;
            height: 100%;
            object-fit: fill;
          }
        }
      }
    }

    &.sec-3 {
      position: relative;
      width: 100%;
      height: 100vh;
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
