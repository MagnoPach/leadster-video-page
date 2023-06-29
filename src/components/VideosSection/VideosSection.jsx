import React, { useContext } from "react";
import Select from "react-select";

import VideoCard from "../VideoCard/VideoCard";
import { VideosContext } from "../../Context/VideosContext";
import * as S from "./styles";
import {
  Option,
  orderOptions,
  selectStyles,
} from "../../utils/react-select-options";

export default function VideosSection() {
  const { videosData, selectedOrder, setSelectedOrder } =
    useContext(VideosContext);

  const currentSelectedOption = getCurrentSelectedOption();

  function getCurrentSelectedOption() {
    return orderOptions.findIndex(
      (option) => option["value"] === selectedOrder
    );
  }

  function handleSetSelectedOption(option) {
    setSelectedOrder(option["value"]);
  }

  return (
    <S.Section>
      <div className="container">
        <S.FilterWrapper>
          <div className="select-wrapper">
            <label>Ordenar por:</label>
            <Select
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
        <S.GridContainer>
          {videosData?.map((video) => (
            <VideoCard key={video.id} data={video} />
          ))}
        </S.GridContainer>
      </div>
    </S.Section>
  );
}
