"use client";
import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
  }
`;
export const Social = styled.a`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebeef5;
  text-align: center;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    background: #00aff0;
    img {
      filter: invert(0%) sepia(100%) saturate(0) hue-rotate(0deg)
        brightness(150%) contrast(100%);
    }
  }

  @media (min-width: 768px) {
  }
`;
