import React, { PropsWithChildren } from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

export default function index({ children }: PropsWithChildren) {
  return (
    <Main>
      <Header />
      {/* <Outlet /> */}
      {children}
    </Main>
  );
}

const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;
`;
