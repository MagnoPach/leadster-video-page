import React, { useContext, useEffect, useRef } from "react";
import Select from "react-select";

import Filters from "../Filters/Filters";
import VideoCard from "../VideoCard/VideoCard";
import { VideosContext } from "../../Context/VideosContext";
import * as S from "./styles";
import {
  Option,
  orderOptions,
  selectStyles,
} from "../../utils/react-select-options";
import { handleDelay } from "../../utils/util-methods";

export default function VideosSection() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const {
    videosDisplay,
    selectedOrder,
    setSelectedOrder,
    currentPageIndex,
    setCurrentPageIndex,
    currentCategory,
  } = useContext(VideosContext);

  const currentSelectedOption = getCurrentSelectedOption();

  useEffect(() => {
    handleScrollTop();
  }, [selectedOrder, currentCategory, currentPageIndex]);

  function getCurrentSelectedOption() {
    return orderOptions.findIndex(
      (option) => option["value"] === selectedOrder
    );
  }

  async function handleSetSelectedOption(option) {
    handleGridFade();
    await handleDelay(200);
    setSelectedOrder(option["value"]);
  }

  async function handleSetCurrentPageIndex(pageIndex) {
    handleGridFade();
    await handleDelay(200);
    setCurrentPageIndex(pageIndex);
  }

  function handleScrollTop() {
    window.scrollTo({
      top: containerRef.current.offsetTop - 200,
      behavior: "smooth",
    });
  }

  function handleGridFade() {
    gridRef.current.style.opacity = 0;
    gridRef.current.style.animationFillMode = "forwards";
    setTimeout(() => {
      gridRef.current.style.opacity = 1;
    }, 200);
  }

  return (
    <S.Section aria-label="Videos">
      <div className="container" ref={containerRef}>
        <S.FilterWrapper>
          <Filters handleFade={handleGridFade} />
          <div className="select-wrapper">
            <label>Ordenar por:</label>
            <Select
              id="selectbox"
              instanceId="selectbox"
              isSearchable={false}
              isClearable={false}
              defaultValue={orderOptions[currentSelectedOption]}
              closeMenuOnSelect={true}
              components={{ Option }}
              onChange={(event) => handleSetSelectedOption(event)}
              styles={selectStyles}
              options={orderOptions}
            />
          </div>
        </S.FilterWrapper>
        <S.GridContainer ref={gridRef}>
          {videosDisplay[currentPageIndex]?.map((video) => (
            <VideoCard key={video.id} data={video} />
          ))}
        </S.GridContainer>
        <S.PaginationWrapper>
          <p className="page-text">Página</p>
          <div className="buttons">
            {videosDisplay.map((page, index) => (
              <S.PaginationButtons
                key={index}
                isActive={index === currentPageIndex}
                onClick={() => handleSetCurrentPageIndex(index)}
              >
                {index + 1}
              </S.PaginationButtons>
            ))}
          </div>
        </S.PaginationWrapper>
      </div>
    </S.Section>
  );
}
