import React from "react";
import Image from "next/image";
import linkedin from "../../../public/linkedin.svg";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";

import * as S from "./styles";

export default function SocialLinks() {
  return (
    <S.SocialContainer>
      <S.Social
        href="https://www.linkedin.com/company/getleadster/"
        target="_blank"
      >
        <Image src={linkedin} alt="LinkedIn logo" />
      </S.Social>
      <S.Social
        href="https://www.facebook.com/leadsterplatform"
        target="_blank"
      >
        <Image src={facebook} alt="Facebook logo" />
      </S.Social>
      <S.Social
        href="https://www.instagram.com/leadster.com.br/"
        target="_blank"
      >
        <Image src={instagram} alt="Instagram logo" />
      </S.Social>
    </S.SocialContainer>
  );
}
