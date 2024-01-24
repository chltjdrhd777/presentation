import styled from '@emotion/styled';
import Transition from 'Components/HOC/Transition';
import { PathnameType } from 'Constants/navigation';
import { useLocation, useNavigate } from 'react-router-dom';
import { PathColorType } from 'utils/getPathColor';
import { motion } from 'framer-motion';

import { TbSquareArrowLeft, TbSquareArrowRight } from 'react-icons/tb';
import { NavigateDirectionType, getNextPath } from 'utils/getNextPath';
import { fadeIn, hoverScale, textVariant } from 'utils/motion';
import { useRef, useState } from 'react';
import useGetPathColor from 'hook/useGetPathColor';
import { TypeAnimation } from 'react-type-animation';

import profileImg from '../../image/profile.jpg';
import { css } from '@emotion/react';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathColor = useGetPathColor();

  const nextNavigation = (key: NavigateDirectionType) => {
    const nextPath = getNextPath(location.pathname as PathnameType, key);
    navigate(nextPath.path);
  };

  const [isReversed, setIsReversed] = useState(false);

  return (
    <Section
      className="section"
      id="home"
      pathColor={pathColor}
      isReversed={isReversed}
    >
      <Content variants={textVariant(0.5)} initial="hidden" animate="visible">
        <h3>안녕하세요 여러분 저는</h3>
        <h1>
          <span className="name">
            <TypeAnimation
              sequence={[
                '앤더손', // Types 'One'
                1500, // Waits 1s
                '최우철', // Deletes 'One' and types 'Two'
                1500, // Waits 2s
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
            {/* 앤더손 */}
          </span>
          이라고 합니다.
        </h1>
        <h3>
          저는 <span> 프론트엔드 개발자입니다.</span>
        </h3>
        <p>
          모든 개발 현상에 근본적인 핵심과 본질을 파악하기 위해 노력하며
          <br /> 배움이 저를 자유케 하리라는 믿음을 가지고 탐구에 매진합니다.
        </p>

        <ArrowWrapper variants={fadeIn(1)} initial="hidden" animate="visible">
          <ArrowSVG
            whileHover={hoverScale}
            onClick={() => {
              nextNavigation('ArrowLeft');
              // setIsReversed(false);
            }}
          >
            <TbSquareArrowLeft />
          </ArrowSVG>

          <ArrowSVG
            whileHover={hoverScale}
            onClick={() => {
              nextNavigation('ArrowRight');
              // setIsReversed(true);
            }}
          >
            <TbSquareArrowRight />
          </ArrowSVG>
        </ArrowWrapper>
      </Content>

      <HomeImage variants={fadeIn(0.3)} initial="hidden" animate="visible">
        <img src={profileImg} alt="" />
      </HomeImage>
    </Section>
  );
}

export const Section = styled.section<{
  pathColor?: PathColorType;
  isReversed?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  gap: 5rem;
  background-color: ${({ pathColor }) => pathColor?.bg};
`;

export const Content = styled(motion.div)`
  & h3 {
    font-size: 3.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['white-0']};
    margin: 1rem 0;
  }

  & h1 {
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 1.3;

    & .name {
      display: inline-block;
      width: 165px;
      color: ${({ theme }) => theme.colors.pointBeige};
    }
  }

  & p {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

export default Transition(Home);

export const HomeImage = styled(motion.div)`
  width: 35vw;
  & img {
    width: 100%;
  }
`;

export const ArrowWrapper = styled(motion.div)`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;

  justify-content: flex-end;
  padding-right: 5rem;
`;

export const ArrowSVG = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  opacity: 0.78;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
  }
`;
