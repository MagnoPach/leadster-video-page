import React, { createContext, useEffect, useState } from "react";

import videosDataJson from "../../data.json";

const paginationLimit = 9;

export const VideosContext = createContext();
VideosContext.displayName = "";

export const VideosProvider = ({ children }) => {
  const [videosData, setVideosData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("publishedAt");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const videosDisplay = videosData && getVideoByFilters(videosData);
  const uniqueCategorys = [
    ...new Set(videosData?.map((video) => video["category"])),
  ];

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPageIndex(0);
  }, [currentCategory, selectedOrder]);

  function fetchData() {
    setVideosData(videosDataJson);
  }

  function getVideoByFilters(videos) {
    if (videos) {
      const videoDataTemp = [...videos];
      let finalVideoData = videoDataTemp;

      if (currentCategory.length > 0) {
        const VideoFilteredByCategory = finalVideoData.filter((video) =>
          currentCategory.includes(video["category"])
        );
        finalVideoData = [...VideoFilteredByCategory];
      }

      orderList(finalVideoData, selectedOrder);

      const splitVideoList = splitVideoListForPagination(
        finalVideoData,
        paginationLimit
      );

      finalVideoData = [...splitVideoList];

      return finalVideoData;
    }
  }

  function splitVideoListForPagination(videosList, maxLength) {
    return Array.from(
      { length: Math.ceil(videosList.length / maxLength) },
      (_, index) =>
        videosList.slice(index * maxLength, index * maxLength + maxLength)
    );
  }

  function orderList(videoList, param) {
    videoList.sort((a, b) => {
      a = a[param];
      b = b[param];

      return b.localeCompare(a);
    });
  }

  console.log(videosDisplay);

  return (
    <VideosContext.Provider
      value={{
        videosDisplay,
        uniqueCategorys,
        selectedOrder,
        setSelectedOrder,
        currentCategory,
        setCurrentCategory,
        currentPageIndex,
        setCurrentPageIndex,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
