import styled from '@emotion/styled';
import Transition from 'Components/HOC/Transition';
import useGetPathColor from 'hook/useGetPathColor';
import { PathColorType } from 'utils/getPathColor';
import { fadeIn, spinningFadeIn, textVariant } from 'utils/motion';

import { motion } from 'framer-motion';

import mentalImg from '../../image/mental.png';
import physicalImg from '../../image/physical.png';
import toolImg from '../../image/tool.png';
import itelsImg from '../../image/ielts.png';
import udemyImg from '../../image/udemy.png';
import codeStatesImg from '../../image/codestates.png';
import wantedImg from '../../image/wanted.png';
import money from '../../image/money.png';

import Card from './Card';
import ModalPortal from 'Components/Modal/ModalPortal';

import { useRef, useState } from 'react';
import ItelsContent from './ItelsContent';
import UdemyContent from './UdemyContent';
import CodeStatesContent from './CodeStatesContent';
import WantedContent from './WantedContent';
import useResetScroll from 'hook/useResetScroll';
import useScrollMove from 'hook/useScrollMove';

function About() {
  const pathColor = useGetPathColor();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useResetScroll();

  //todo
  const modalContent = {
    itels: ItelsContent,
    udemy: UdemyContent,
    codestates: CodeStatesContent,
    wanted: WantedContent,
  };
  const [selectedContent, setSelectedContent] = useState<null | keyof typeof modalContent>(null);
  const onCloseModal = () => {
    setSelectedContent(null);
    setIsModalOpen(false);
  };

  const cardData = [
    { text: 'IELTS 점수 획득하기', imgSrc: itelsImg, comp: 'itels' },
    { text: 'Udemy', imgSrc: udemyImg, comp: 'udemy' },
    { text: 'Code States', imgSrc: codeStatesImg, comp: 'codestates' },
    { text: 'Wanted Internship', imgSrc: wantedImg, comp: 'wanted' },
  ];

  const { ref } = useScrollMove();

  return (
    <Section className="section" pathColor={pathColor}>
      <div className="scroll-watcher"></div>

      <div className="box sec-1">
        <motion.h1 variants={textVariant()} initial="hidden" animate="visible">
          개발을 시작하게 된 계기
        </motion.h1>
      </div>

      <div className="box sec-2" ref={ref}>
        <Therapy>
          <TherapyImage>
            <motion.div
              className="image-wrapper"
              variants={fadeIn(0.3)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.25 }}
            >
              <img src={mentalImg} alt="" />
            </motion.div>

            <motion.div
              className="image-wrapper"
              variants={fadeIn(0.5)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.25 }}
            >
              <img src={physicalImg} alt="" />
            </motion.div>
          </TherapyImage>

          <TherapyExplanation>
            <motion.h2
              variants={fadeIn(0.7)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.25 }}
            >
              재활을 통한 <span className="highlight">일상 생활로</span> 복귀
            </motion.h2>

            <motion.div
              variants={fadeIn(1)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.25 }}
            >
              <h3 className="but">하지만...</h3>
            </motion.div>

            <ToolWrapper>
              <ToolImage
                variants={fadeIn(1.2)}
                initial="hidden"
                whileInView={'visible'}
                viewport={{ once: true, amount: 0.25 }}
              >
                <img src={toolImg} alt="" />
              </ToolImage>

              <motion.div
                className="cache-img"
                variants={spinningFadeIn}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 2,
                }}
                initial="hidden"
                whileInView={'visible'}
                viewport={{ once: true, amount: 0.25 }}
              >
                <img src={money} alt="" />
              </motion.div>
            </ToolWrapper>
          </TherapyExplanation>
        </Therapy>
      </div>

      <div className="box sec-3">
        <h3>그래서 시작된 개발자가 되기위한 여정</h3>
        <CardContainer>
          {cardData.map((d, idx) => (
            <CardWrapper
              onClick={() => {
                setSelectedContent(d.comp as keyof typeof modalContent);
                setIsModalOpen(true);
              }}
            >
              <Card index={idx} text={d.text}>
                <img src={d.imgSrc} alt="" />
              </Card>
            </CardWrapper>
          ))}
        </CardContainer>
      </div>

      {isModalOpen && (
        <ModalPortal onClose={onCloseModal}>{selectedContent ? modalContent[selectedContent]() : <></>}</ModalPortal>
      )}
    </Section>
  );
}

export default Transition(About);

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
    height: calc(100vh - 5rem);

    &.bg {
      background-color: ${({ pathColor }) => pathColor?.bg};
    }

    &.sec-1 h1 {
      font-size: 7.5rem;
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
    width: 20rem;
    position: absolute;
    bottom: 10px;
    right: 150px;

    & img {
      width: 100%;
    }
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
