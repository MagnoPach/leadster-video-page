import { VideoDataModel, ConfigPlayerModel } from "src/models/Interfaces";

export const initialContextValue = {
  videosDisplay: [],
  uniqueCategorys: [],
  seletedVideoData: null,
  setSeletedVideoData: (value: VideoDataModel) => value,
  selectedOrder: "publishedAt",
  setSelectedOrder: (value: string) => value,
  currentCategory: "",
  setCurrentCategory: (value: string) => value,
  currentPageIndex: 0,
  setCurrentPageIndex: (value: number) => value,
};

export const downloadButtonStyle = {
  presentation: {
    label: "Presentation.ppt",
    bg_dark: "#fff1a0",
    bg_light: "#fff8d0",
    text_color: "#a68e1c",
  },
  document: {
    label: "Document.doc",
    bg_dark: "#95D3FF",
    bg_light: "#C2E6FF",
    text_color: "#0073EA",
  },
  spread_sheet: {
    label: "Spreadsheet.xls",
    bg_dark: "#9FEFDF",
    bg_light: "#C2F4EA",
    text_color: "#00B88F",
  },
  folder: {
    label: "Folder.zip",
    bg_dark: "#D0DEE7",
    bg_light: "#E8EEF3",
    text_color: "#77848C",
  },
};

export const playerConfig: ConfigPlayerModel = {
  youtube: {
    playerVars: {
      autoplay: 1,
      autohide: 1,
      wmode: "opaque",
      origin: typeof window !== "undefined" && window.location.origin,
    },
  },
};

export const paginationLimit = 9;
