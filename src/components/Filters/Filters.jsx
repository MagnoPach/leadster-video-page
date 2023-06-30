import React, { useContext } from "react";

import { VideosContext } from "../../Context/VideosContext";
import { handleDelay } from "../../utils/util-methods";
import * as S from "./styles";

export default function Filters({ handleFade }) {
  const { uniqueCategorys, currentCategory, setCurrentCategory } =
    useContext(VideosContext);

  async function handleSetCurrentCategory(category) {
    handleFade();
    await handleDelay(200);
    if (category === currentCategory) {
      setCurrentCategory("");
    } else {
      setCurrentCategory(category);
    }
  }

  return (
    <S.Container>
      {uniqueCategorys?.map((category) => (
        <S.Button
          key={category}
          isActive={category === currentCategory}
          onClick={() => handleSetCurrentCategory(category)}
        >
          {category}
        </S.Button>
      ))}
    </S.Container>
  );
}
