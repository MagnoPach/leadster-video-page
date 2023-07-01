import React, { createContext, useEffect, useState } from "react";

import videosDataJson from "../../data.json";
import { VideoContextProps, VideoDataModel } from "../Models/Models";

const paginationLimit = 9;

const initialContextValue = {
  videosDisplay: [],
  uniqueCategorys: [],
  selectedOrder: "publishedAt",
  setSelectedOrder: (value: string) => value,
  currentCategory: "",
  setCurrentCategory: (value: string) => value,
  currentPageIndex: 0,
  setCurrentPageIndex: (value: number) => value,
};

export const VideosContext =
  createContext<VideoContextProps>(initialContextValue);
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

  function fetchData(): void {
    setVideosData(videosDataJson);
  }

  function getVideoByFilters(videos: VideoDataModel[]): VideoDataModel[][] {
    const videoDataTemp: VideoDataModel[] = [...videos];
    let finalVideoData: VideoDataModel[] = videoDataTemp;

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

    const splitedVideoData: VideoDataModel[][] = [...splitVideoList];

    return splitedVideoData;
  }

  function splitVideoListForPagination(
    videosList: VideoDataModel[],
    maxLength: number
  ): VideoDataModel[][] {
    return Array.from(
      { length: Math.ceil(videosList.length / maxLength) },
      (_, index) =>
        videosList.slice(index * maxLength, index * maxLength + maxLength)
    );
  }

  function orderList(
    videoList: VideoDataModel[],
    param: string
  ): VideoDataModel[] {
    videoList.sort((a, b) => {
      const aAtt = a[param];
      const bAtt = b[param];

      return bAtt.localeCompare(aAtt);
    });
    return videoList;
  }

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
