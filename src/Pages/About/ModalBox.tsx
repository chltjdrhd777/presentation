import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

export default function ModalBox({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 55rem;
  height: 70rem;
  background-color: white;
  border-radius: 5rem;

  padding: 3rem;
`;
