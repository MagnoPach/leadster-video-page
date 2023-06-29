import React from "react";

import { VideosContext } from "../../Context/VideosContext";
import * as S from "./styles";

export default function Filter() {
  const { currentCategory, setCurrentCategory } = useContext(VideosContext);

  function handleSetCurrentCategory(category) {
    if (category === currentCategory) {
      setCurrentCategory("");
    } else {
      setCurrentCategory(category);
    }
  }
  return <S.Container></S.Container>;
}
