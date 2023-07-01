import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

import * as S from "./styles";

export default function Header() {
  return (
    <S.HeaderContainer>
      <Image src={Logo} alt="Logo Leadster" />
    </S.HeaderContainer>
  );
}
