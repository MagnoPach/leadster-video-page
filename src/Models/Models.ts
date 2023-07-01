export interface VideoContextProps {
  videosDisplay: VideoDataModel[][];
  uniqueCategorys: string[];
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

export interface activeButtonProps {
  isactive: string;
}
