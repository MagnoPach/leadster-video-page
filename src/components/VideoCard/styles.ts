import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: transparent;
  cursor: pointer;

  * {
    transition: 0.2s;
  }

  .title {
    font-family: "Plus Jakarta Sans";
    font-size: 12px;
    font-weight: 700;
    text-align: left;
    color: #2c3e50;
    padding: 16px 20px;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 14px;
    }

    &:hover {
      .play-overlay {
        opacity: 1;
        filter: opacity(0.4);
      }

      .play-container {
        opacity: 1;
      }

      .title {
        color: #2c83fb;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  .play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 140px;
    background-color: #2c83fb;
    opacity: 0;
  }
  .play-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .play-overlay {
      height: 178px;
    }
    img {
      height: 178px;
    }
  }
`;
