import React from "react";
import Image from "next/image";
import LogoGif from "../../../public/leadster_270.gif";

import SocialLinks from "../Actions/SocialLinks/SocialLinks";
import { footerColumns } from "src/utils/footer-links";
import { FooterColumnsModel, FooterLinksModel } from "src/models/Models";
import * as S from "./styles";

export default function Footer() {
  const emailContatoLeadster: string = "contato@leadster.com.br";
  const phoneContatoLeadster: string = "(42) 98828-9851";

  return (
    <S.FooterContainer>
      <div className="container">
        <S.LogoWrapper>
          <a href="https://leadster.com.br/">
            <div className="logo-container">
              <Image
                alt="Logo Leadster"
                src={LogoGif}
                width="270"
                height="62"
                loading="lazy"
              />
            </div>
          </a>
          <p className="leadster-slogan">
            Transformando visitantes em clientes.
          </p>
        </S.LogoWrapper>
        <S.LinkColummnsWrapper>
          {footerColumns.map((column: FooterColumnsModel) => (
            <div key={column["columnTitle"]}>
              <S.LinkColumnTitle>{column["columnTitle"]}</S.LinkColumnTitle>
              <ul>
                {column["links"].map((link: FooterLinksModel) => (
                  <S.LineLabel key={link["label"]}>
                    <a href={link["url"]} target="_blank">
                      {link["label"]}
                    </a>
                  </S.LineLabel>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <S.LinkColumnTitle>Siga a Leadster</S.LinkColumnTitle>
            <SocialLinks />
            <S.Contact>
              E-mail:
              <span>{emailContatoLeadster}</span>
            </S.Contact>
            <S.Contact>
              Telefone:
              <span>{phoneContatoLeadster}</span>
            </S.Contact>
          </div>
        </S.LinkColummnsWrapper>
      </div>
      <S.FooterFooter>
        <p className="copyright">
          Copyright © 2015 - 2022 Todos os direitos reservados |{" "}
          <a href="https://leadster.com.br/">Leadster</a>
        </p>
        <p className="adress">
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{" "}
          <a href="https://leadster.com.br/termos_de_uso/">Termos de uso</a> |{" "}
          <a href="https://leadster.com.br/privacidade/">Privacidade</a>
        </p>
      </S.FooterFooter>
    </S.FooterContainer>
  );
}
