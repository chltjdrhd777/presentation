import styled from '@emotion/styled';
import Transition from 'Components/HOC/Transition';

import thanks from '../../image/thanks.jpeg';

function Closing() {
  return (
    <Section className="section">
      <div className="thanks-img">
        <img src={thanks} alt="" />
      </div>
    </Section>
  );
}

export default Transition(Closing);

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  & .thanks-img {
    width: 50rem;
    height: 50rem;

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;
