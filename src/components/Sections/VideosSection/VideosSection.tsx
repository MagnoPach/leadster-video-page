import React, { MutableRefObject, useContext, useRef } from "react";
import Select from "react-select";

import Filters from "../../Actions/Filters/Filters";
import VideoCard from "../../Actions/VideoCard/VideoCard";
import { VideosContext } from "../../../store/VideosContext";
import {
  orderOptions,
  selectStyles,
} from "../../../utils/react-select-options";
import { handleDelay, handleScrollTop } from "../../../utils/util-methods";
import { OrderOptionsModel } from "src/models/Models";
import * as S from "./styles";

export default function VideosSection() {
  const containerRef = useRef<HTMLDivElement | null>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  const gridRef = useRef<HTMLDivElement | null>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  const {
    videosDisplay,
    selectedOrder,
    setSelectedOrder,
    currentPageIndex,
    setCurrentPageIndex,
  } = useContext(VideosContext);

  const currentSelectedOption = getCurrentSelectedOption();

  function getCurrentSelectedOption(): number {
    return orderOptions.findIndex(
      (option) => option["value"] === selectedOrder
    );
  }

  async function handleSetSelectedOption(
    option: OrderOptionsModel
  ): Promise<void> {
    handleGridFade();
    await handleDelay(200);
    setSelectedOrder(option["value"]);
  }

  async function handleSetCurrentPageIndex(pageIndex: number): Promise<void> {
    handleGridFade();
    await handleDelay(200);
    setCurrentPageIndex(pageIndex);
  }

  async function handleGridFade() {
    handleScrollTop(containerRef);
    gridRef.current.style.opacity = "0";
    await handleDelay(200);
    gridRef.current.style.opacity = "1";
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
            {videosDisplay.map((_, index) => (
              <S.PaginationButtons
                key={index}
                $isactive={String(index === currentPageIndex)}
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
