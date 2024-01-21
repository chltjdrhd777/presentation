import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

export default function index() {
  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
}

const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;
`;
