import React from 'react';
import ModalBox from './ModalBox';
import styled from '@emotion/styled';

import intership2 from '../../image/internship2.png';
import internship3 from '../../image/internship3.png';

export default function UdemyContents() {
  return (
    <ModalBox>
      <ImageBox>
        {/* <img src={intership2} alt="" /> */}

        <img src={internship3} alt="" />
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
