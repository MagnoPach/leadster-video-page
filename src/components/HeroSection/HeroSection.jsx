import React from "react";
import Image from "next/image";
import AssetHeader from "/public/asset-header.png";

import * as S from "./styles";

export default function HeroSection() {
  return (
    <S.Section aria-label="Hero">
      <div className="container">
        <S.HeroTitleContainer>
          <S.Disclaimer>Webinars Exclusivos</S.Disclaimer>
          <h1>
            Menos Conversinha,
            <br />
            <strong>Mais Conversão</strong>
          </h1>
          <Image src={AssetHeader} alt="" className="leadster-decoration" />
        </S.HeroTitleContainer>

        <p className="hero-footer">
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </p>
      </div>
    </S.Section>
  );
}
