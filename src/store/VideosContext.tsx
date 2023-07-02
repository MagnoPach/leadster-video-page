import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import { VideoContextProps, VideoDataModel } from "../models/Models";
import { initialContextValue } from "src/utils/default-values";

const paginationLimit = 9;

export const VideosContext =
  createContext<VideoContextProps>(initialContextValue);
VideosContext.displayName = "";

export const VideosProvider = ({ children }) => {
  const [videosData, setVideosData] = useState<VideoDataModel[]>([]);
  const [seletedVideoData, setSeletedVideoData] =
    useState<VideoDataModel | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string>("publishedAt");
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const videosDisplay = videosData && getVideoByFilters(videosData);
  const uniqueCategorys = videosData && getUniqueCategorys(videosData);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPageIndex(0);
  }, [currentCategory, selectedOrder]);

  async function fetchData(): Promise<void> {
    const videoDataUrl = "https://api.jsonbin.io/v3/b/64a1795e9d312622a379262a";

    try {
      const response = await axios.get(videoDataUrl);
      const videos = response["data"]["record"];
      setVideosData(videos);
    } catch (error) {
      console.error("Error fetching videos from server:", error.message);
    }
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

  function getUniqueCategorys(videos: VideoDataModel[]): string[] {
    const uniques = [...new Set(videos?.map((video) => video["category"]))];

    orderList(uniques);

    return uniques;
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
    list: VideoDataModel[] | string[],
    param?: string
  ): VideoDataModel[] | string[] {
    list.sort((a, b) => {
      const aAtt = param ? a[param] : a;
      const bAtt = param ? b[param] : b;

      return aAtt.localeCompare(bAtt);
    });
    return list;
  }

  return (
    <VideosContext.Provider
      value={{
        videosDisplay,
        uniqueCategorys,
        seletedVideoData,
        setSeletedVideoData,
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
