import styled from "styled-components";

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

export const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "#2c83fb" : "transparent")};
  font-family: "Plus Jakarta Sans";
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => (props.isActive ? "#fff" : "#1c1c1c")};
  border: ${(props) =>
    props.isActive ? "1px solid #2c83fb" : "1px solid #1c1c1c"};
  border-radius: 20px;
  cursor: pointer;
  padding: 4px 8px;
  transition: 0.2s;

  &:hover {
    color: ${(props) => (props.isActive ? "#fff" : "#2c83fb")};
    opacity: ${(props) => (props.isActive ? 0.8 : 1)};
    border-color: #2c83fb;
  }

  @media (min-width: 768px) {
  }
`;
