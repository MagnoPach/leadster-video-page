import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

import * as S from "./styles";

export default function Header() {
  return (
    <S.HeaderContainer>
      <Image
        src={Logo}
        alt="Logo Leadster"
        className="w-32 sm:w-44 h-7 sm:h-9"
      />
    </S.HeaderContainer>
  );
}
