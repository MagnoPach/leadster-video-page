import styled from "styled-components";

import { activeButtonProps } from "../../../models/Models";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;

  @media (min-width: 640px) {
    justify-content: flex-start;
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

export const Button = styled("button")<activeButtonProps>`
  background-color: ${(props) =>
    props.$isactive === "true" ? "#2c83fb" : "transparent"};
  font-family: "Plus Jakarta Sans";
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => (props.$isactive === "true" ? "#fff" : "#2c3e50")};
  border: ${(props) =>
    props.$isactive === "true" ? "1px solid #2c83fb" : "1px solid #2c3e50"};
  border-radius: 20px;
  cursor: pointer;
  padding: 4px 8px;
  transition: 0.2s;

  &:hover {
    color: ${(props) => (props.$isactive === "true" ? "#fff" : "#2c83fb")};
    opacity: ${(props) => (props.$isactive === "true" ? 0.8 : 1)};
    border-color: #2c83fb;
  }

  @media (min-width: 768px) {
  }
`;
