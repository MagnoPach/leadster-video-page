import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";

import compareImage from "/public/comparativo_img_CTA.png";
import rdSeal from "/public/selo_RD.png";
import noCard from "/public/no-card-dark.webp";
import rating from "/public/rating.webp";

import * as S from "./styles";

export default function CompareSection() {
  const [compareContainerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <S.Section aria-label="Compare">
      <div className="floating-square"></div>
      <div className="container" ref={compareContainerRef}>
        <S.CompareWrapper>
          <S.CompareImageContainer>
            <div className={inView ? "left-animation" : ""}>
              <Image
                alt=""
                src={compareImage}
                width="618"
                height="578"
                loading="lazy"
              />
            </div>
          </S.CompareImageContainer>
          <S.DemonstrationContainer className={inView ? "right-animation" : ""}>
            <S.H2>
              Pronto para triplicar sua <b>Geração de Leads?</b>
            </S.H2>
            <S.H3>
              Criação e ativação em <b>4 minutos</b>.
            </S.H3>
            <S.ButtonWrapper>
              <S.DemonstationButton>
                VER DEMONSTRAÇÃO
                <ArrowRight size={21} weight="bold" />
              </S.DemonstationButton>
              <div className="rd-seal">
                <Image
                  alt="Top 10 apps mais usados Rd Station"
                  src={rdSeal}
                  width="150"
                  height="53.4"
                  loading="lazy"
                />
              </div>
            </S.ButtonWrapper>
            <S.DemonstrationFooter>
              <div className="no-card-wrapper">
                <Image
                  alt="Não é necessário cartão de crédito"
                  src={noCard}
                  width="16"
                  height="16"
                  loading="lazy"
                />
                <p className="no-card-text">
                  Não é necessário cartão de crédito |
                </p>
              </div>
              <div className="rate-wrapper">
                <Image
                  alt="4.9/5 média de satisfação"
                  src={rating}
                  width="92"
                  height="16"
                  loading="lazy"
                />
                <p className="rating-text">
                  <b>4.9</b>/5 - Média de Satisfação
                </p>
              </div>
            </S.DemonstrationFooter>
          </S.DemonstrationContainer>
        </S.CompareWrapper>
      </div>
    </S.Section>
  );
}
