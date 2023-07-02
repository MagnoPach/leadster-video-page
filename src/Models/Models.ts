export interface VideoContextProps {
  videosDisplay: VideoDataModel[][];
  uniqueCategorys: string[];
  seletedVideoData: VideoDataModel;
  setSeletedVideoData: (value: VideoDataModel) => void;
  selectedOrder: string;
  setSelectedOrder: (value: string) => void;
  currentCategory: string;
  setCurrentCategory: (value: string) => void;
  currentPageIndex: number;
  setCurrentPageIndex: (value: number) => void;
}

export interface VideoDataModel {
  id: string;
  video_url: string;
  thumb: string;
  publishedAt: string;
  title: string;
  description: string;
  category: string;
}

export interface orderOptionsModel {
  value: string;
  label: string;
}

export interface FooterColumnsModel {
  columnTitle: string;
  links: FooterLinksModel[];
}

export interface FooterLinksModel {
  label: string;
  url: string;
}

export interface activeButtonProps {
  $isactive: string;
}
