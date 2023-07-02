import React, { useContext } from "react";

import { VideosContext } from "../../store/VideosContext";
import { handleDelay } from "../../utils/util-methods";
import * as S from "./styles";

interface FiltersProps {
  handleFade: () => void;
}

export default function Filters({ handleFade }: FiltersProps) {
  const { uniqueCategorys, currentCategory, setCurrentCategory } =
    useContext(VideosContext);

  async function handleSetCurrentCategory(category: string): Promise<void> {
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
          $isactive={String(category === currentCategory)}
          onClick={() => handleSetCurrentCategory(category)}
        >
          {category}
        </S.Button>
      ))}
    </S.Container>
  );
}
