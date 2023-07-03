import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import { VideoContextProps, VideoDataModel } from "../models/Interfaces";
import { initialContextValue } from "src/utils/default-values";
import { getVideoByFilters, getUniqueCategorys } from "src/utils/util-methods";

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

  const videosDisplay =
    videosData && getVideoByFilters(videosData, currentCategory, selectedOrder);
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
