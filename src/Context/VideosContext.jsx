import React, { createContext, useEffect, useState } from "react";

import videosDataJson from "../../data.json";

export const VideosContext = createContext();
VideosContext.displayName = "";

export const VideosProvider = ({ children }) => {
  const [videosData, setVideosData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("date");
  const [currentCategpry, setCurrentCategory] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setVideosData(videosDataJson);
  }

  console.log(videosData);

  return (
    <VideosContext.Provider
      value={{
        videosData,
        selectedOrder,
        setSelectedOrder,
        currentCategpry,
        setCurrentCategory,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
