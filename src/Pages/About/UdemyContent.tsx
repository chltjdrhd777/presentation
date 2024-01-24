import React from 'react';
import ModalBox from './ModalBox';
import styled from '@emotion/styled';

import lecture from '../../image/lecture.png';

import cert2 from '../../image/cert2.png';

export default function UdemyContents() {
  return (
    <ModalBox>
      <ImageBox>
        <img src={lecture} alt="" />
        <img src={cert2} alt="" />
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
