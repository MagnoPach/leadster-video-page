import React from 'react';
import Image from 'next/image';
import { Play } from 'phosphor-react';

import * as S from './styles';

export default function VideoCard({ data }) {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image src={data.thumb} width={500} height={500} alt={data.title} />
        <div className="play-overlay" />
        <div className="play-container">
          <Play size={38} color="#ffffff" weight="fill" />
        </div>
      </S.ImageWrapper>
      <p className="title">{data.title}</p>
    </S.Container>
  );
}
