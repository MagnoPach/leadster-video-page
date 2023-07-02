import { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { X } from "phosphor-react";

import DownloadButton from "../../Actions/DownloadButton/DownloadButton";
import { VideosContext } from "../../../store/VideosContext";
import { playerConfig } from "src/utils/default-values";
import * as S from "./styles";

export default function VideoModal() {
  const { seletedVideoData, setSeletedVideoData } = useContext(VideosContext);

  const documentStyle = document.body.style;

  useEffect(() => {
    documentStyle.overflow = "hidden";

    return () => {
      documentStyle.overflow = "unset";
    };
  }, []);

  function handleClose(): void {
    setSeletedVideoData(null);
  }

  return (
    <>
      <S.Backdrop onClick={handleClose} />
      <S.ContainerWrapper>
        <S.Modal id="modal">
          <S.Header>
            <S.CloseButtonWrapper onClick={handleClose}>
              <X size={18} color="#000" weight="bold" />
            </S.CloseButtonWrapper>
            <S.ModalTitle>
              <span>Webinar:</span> {seletedVideoData["title"]}
            </S.ModalTitle>
          </S.Header>
          <ReactPlayer
            url={seletedVideoData["video_url"]}
            width="100%"
            height="auto"
            style={{
              aspectRatio: "160 / 92",
            }}
            config={playerConfig}
            controls={true}
          />
          <S.Footer>
            <S.FooterTitle>Descrição</S.FooterTitle>
            <S.Text>
              {seletedVideoData["description"].length > 0
                ? seletedVideoData["description"]
                : "Video sem descrição adicionada."}
            </S.Text>
            <S.FooterTitle>Download</S.FooterTitle>
            <S.Downloads>
              <DownloadButton buttonType="spread_sheet" />
              <DownloadButton buttonType="document" />
              <DownloadButton buttonType="presentation" />
            </S.Downloads>
          </S.Footer>
        </S.Modal>
      </S.ContainerWrapper>
    </>
  );
}
