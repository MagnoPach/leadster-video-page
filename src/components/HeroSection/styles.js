import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: #f0f8ff;
  padding: 40px 0;

  .container {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    padding: 96px 0;
  }
`;

export const Disclaimer = styled.span`
  border: 2px solid #2c83fb;
  border-radius: 20px 20px 20px 6px;
  padding: 4px 12px;
  font-family: "Plus Jakarta Sans";
  font-size: 10px;
  font-weight: 800;
  color: #2c83fb;
  text-transform: uppercase;
  display: block;

  @media (min-width: 768px) {
    padding: 4px 14px;
    font-size: 12px;
  }
`;

export const HeroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  position: relative;

  h1 {
    font-family: "Plus Jakarta Sans";
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: #1c1c1c;
    padding: 16px 0;

    strong {
      font-size: 38px;
      color: #2c83fb;
      font-weight: 700;
    }
  }

  .leadster-decoration {
    position: absolute;
    top: 60px;
    right: -16px;
    width: 30px;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 38px;
      padding: 16px 0 20px;

      strong {
        font-size: 72px;
        line-height: 68px;
      }
    }
    .leadster-decoration {
      position: absolute;
      top: 86px;
      right: -20px;
      width: 40px;
    }
  }
`;
