import { Logo } from '@pmndrs/branding';
import {
  AiOutlineHighlight,
  AiOutlineShopping,
  AiFillCamera,
  AiOutlineArrowLeft,
} from 'react-icons/ai';
import { useSnapshot } from 'valtio';
import { state } from './store';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import styled from '@emotion/styled';
import { fadeIn, fadeInCustom, textVariant } from 'utils/motion';

export default function Overlay() {
  const snap = useSnapshot(state);

  const transition = { type: 'spring', duration: 0.8 };

  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  return (
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 1.8, delay: 1 }}
      >
        <Logo width="40" height="40" />
        <div>
          <AiOutlineShopping size="3em" />
        </div>
      </motion.header>

      <AnimatePresence>
        {snap.intro ? (
          <Intro key="main" config={config} />
        ) : (
          <Customizer key="custom" config={config} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Intro({ config }: { config: Variants }) {
  return (
    <motion.section {...config}>
      <HeroSection>
        <div className="title">
          <motion.h1
            variants={fadeInCustom('right', 'spring', 0.3, 0.5)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.25 }}
          >
            옷을 3D로
            <br /> 바꿔봅시다
          </motion.h1>
        </div>
        <div className="description">
          <motion.p
            variants={fadeInCustom('right', 'spring', 0.5, 0.5)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.25 }}
          >
            이것은 three.js로 웹에서 3d를 연습해보기 위해 작업해본 작업물입니다.{' '}
            <br />
            <strong>아직은 어렵지만, 언젠가 익숙해지겠죠?!</strong> 그래도
            해놓고보니 재밌네용.
          </motion.p>

          <div className="button-wrapper">
            <motion.button
              variants={fadeInCustom('right', 'spring', 0.7, 0.1)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: true, amount: 0.25 }}
              style={{ background: 'black' }}
              onClick={() => (state.intro = false)}
            >
              레츠기릿 !! <AiOutlineHighlight size="1.3em" />
            </motion.button>
          </div>
        </div>
      </HeroSection>
    </motion.section>
  );
}

function Customizer({ config }: { config: Variants }) {
  const snap = useSnapshot(state);

  return (
    <motion.section {...config}>
      <div className="customizer">
        <div className="color-options">
          {snap.colors.map((color) => (
            <div
              key={color}
              className="circle"
              style={{ background: color }}
              onClick={() => (state.selectedColor = color)}
            ></div>
          ))}
        </div>

        <div className="decals">
          <div className="decals--container">
            {snap.decals.map((decal) => (
              <div
                key={decal}
                className="decal"
                onClick={() => (state.selectedDecal = decal)}
              >
                <img src={decal + '_thumb.png'} alt="brand" />
              </div>
            ))}
          </div>
        </div>

        <button
          className="share"
          style={{ background: snap.selectedColor }}
          onClick={() => {
            const link = document.createElement('a');
            link.setAttribute('download', 'canvas.png');

            const canvas = document?.querySelector('canvas');

            if (canvas) {
              link.setAttribute(
                'href',
                canvas
                  .toDataURL('image/png')
                  .replace('image/png', 'image/octet-stream'),
              );
            }

            link.click();
          }}
        >
          DOWNLOAD
          <AiFillCamera size="1.3em" />
        </button>

        <button
          className="exit"
          style={{ background: snap.selectedColor }}
          onClick={() => (state.intro = true)}
        >
          GO BACK
          <AiOutlineArrowLeft size="1.3em" />
        </button>
      </div>
    </motion.section>
  );
}

const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  transform: translateX(-15rem);

  & .title h1 {
    font-size: 10rem;
    color: ${({ theme }) => theme.colors.pointLeaf};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.colors.pointOrange};
  }

  & .description {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transform: translate(-10rem, 20rem);

    & p {
      font-size: 1.7rem;
      color: ${({ theme }) => theme.colors['white-0']};
    }

    & .button-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      & button {
        width: 15rem;
      }
    }
  }
`;
