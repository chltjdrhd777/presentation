import React from 'react';
import ModalBox from './ModalBox';
import styled from '@emotion/styled';

import codestates1 from '../../image/codestates1.jpeg';
import codestates2 from '../../image/codestates2.jpeg';

export default function UdemyContents() {
  return (
    <ModalBox>
      <ImageBox>
        <img src={codestates1} alt="" />
        <img src={codestates2} alt="" />
      </ImageBox>
    </ModalBox>
  );
}

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
