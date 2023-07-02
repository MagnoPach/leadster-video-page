import { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { X } from "phosphor-react";

import { VideosContext } from "../../Context/VideosContext";
import * as S from "./styles";

export default function VideoModal() {
  const { seletedVideoData, setSeletedVideoData } = useContext(VideosContext);

  const documentStyle = document.body.style;

  useEffect(() => {
    documentStyle.overflow = "hidden";
    documentStyle.marginRight = "16px";

    return () => {
      documentStyle.overflow = "unset";
      documentStyle.marginRight = "unset";
    };
  }, []);

  function handleClose(): void {
    setSeletedVideoData(null);
  }

  return (
    <>
      <S.Backdrop onClick={handleClose} />
      <S.ContainerWrapper>
        <div id="modal">
          <S.Container>
            <S.Header>
              <S.CloseButtonWrapper onClick={handleClose}>
                <X size={24} color="#000" />
              </S.CloseButtonWrapper>
              <p>{seletedVideoData["title"]}</p>
            </S.Header>
            <ReactPlayer
              url={seletedVideoData["video_url"]}
              width="100%"
              height="auto"
              style={{
                aspectRatio: "160 / 92",
              }}
              controls={true}
            />
          </S.Container>
        </div>
      </S.ContainerWrapper>
    </>
  );
}
