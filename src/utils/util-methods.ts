import { MutableRefObject } from "react";
import { VideoDataModel } from "src/models/Interfaces";
import { paginationLimit } from "./default-values";

export function getVideoByFilters(
  videos: VideoDataModel[],
  category: string,
  order: string
): VideoDataModel[][] {
  const videoDataTemp: VideoDataModel[] = [...videos];
  let finalVideoData: VideoDataModel[] = videoDataTemp;

  if (category.length > 0) {
    const VideoFilteredByCategory = finalVideoData.filter((video) =>
      category.includes(video["category"])
    );
    finalVideoData = [...VideoFilteredByCategory];
  }

  orderList(finalVideoData, order);

  const splitVideoList = splitVideoListForPagination(
    finalVideoData,
    paginationLimit
  );

  const splitedVideoData: VideoDataModel[][] = [...splitVideoList];

  return splitedVideoData;
}

export function getUniqueCategorys(videos: VideoDataModel[]): string[] {
  const uniques = [...new Set(videos?.map((video) => video["category"]))];

  orderList(uniques);

  return uniques;
}

export function splitVideoListForPagination(
  videosList: VideoDataModel[],
  maxLength: number
): VideoDataModel[][] {
  return Array.from(
    { length: Math.ceil(videosList.length / maxLength) },
    (_, index) =>
      videosList.slice(index * maxLength, index * maxLength + maxLength)
  );
}

export function orderList(
  list: VideoDataModel[] | string[],
  param?: string
): VideoDataModel[] | string[] {
  list.sort((a, b) => {
    const aAtt = param ? a[param] : a;
    const bAtt = param ? b[param] : b;

    if (param && param.includes("publishedAt")) {
      return bAtt.localeCompare(aAtt);
    }
    return aAtt.localeCompare(bAtt);
  });
  return list;
}

export function handleDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function handleScrollTop(
  elementRef: MutableRefObject<HTMLDivElement>
): void {
  window.scrollTo({
    top: elementRef.current.offsetTop - 200,
    behavior: "smooth",
  });
}
