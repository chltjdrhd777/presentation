import React from 'react';
import ModalBox from './ModalBox';
import cert from '../../image/cert.png';
import styled from '@emotion/styled';

export default function ItelsContent() {
  return (
    <ModalBox>
      <ImageBox>
        <img src={cert} alt="" />
      </ImageBox>
    </ModalBox>
  );
}

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
