"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 128px;
    height: 30px;
    aspect-ratio: auto 128 / 30;
  }

  @media (min-width: 768px) {
    height: 96px;

    img {
      width: 170px;
      height: 36px;
      aspect-ratio: auto 170 / 36;
    }
  }
`;
