import styled from '@emotion/styled';
import Transition from 'Components/HOC/Transition';

function Home() {
  return (
    <Section className="section" id="home">
      <Content>
        <h3>안녕하세요 여러분 저는</h3>
        <h1>앤더손이라고 합니다.</h1>
        <h3>
          저는 <span> 프론트엔드 개발자입니다.</span>
        </h3>
        <p>
          모든 개발 현상에 근본적인 핵심과 본질을 파악하기 위해 노력하며
          <br /> 진리가 저를 자유케 하리라는 믿음을 가지고 탐구에 매진합니다.
        </p>
      </Content>

      <HomeImage>
        <img src="/image/profile.jpg" alt="" />
      </HomeImage>
    </Section>
  );
}

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const Content = styled.div`
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
  }

  & p {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

export default Transition(Home);

export const HomeImage = styled.div``;
