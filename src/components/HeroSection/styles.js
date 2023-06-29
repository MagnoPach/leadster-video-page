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

    .hero-footer {
      max-width: 278px;
      font-family: "Plus Jakarta Sans";
      font-size: 12px;
      font-weight: 500;
      color: #1c1c1c;
      text-align: center;

      strong {
        font-weight: 800;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 96px 0 130px;

    .container {
      .hero-footer {
        max-width: none;
        font-size: 16px;
        padding-top: 8px;
      }
    }
  }
`;

export const Disclaimer = styled.span`
  border: 2px solid #2c83fb;
  border-radius: 20px 20px 20px 6px;
  padding: 4px 12px;
  font-family: "Plus Jakarta Sans";
  font-size: 8px;
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
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #1c1c1c;
    padding: 16px 20px;

    strong {
      font-size: 36px;
      color: #2c83fb;
      font-weight: 700;
    }
  }

  .leadster-decoration {
    position: absolute;
    top: 56px;
    right: 8px;
    width: 24px;
    object-fit: contain;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 38px;
      padding: 16px 30px 30px;

      strong {
        font-size: 78px;
        line-height: 72px;
      }
    }
    .leadster-decoration {
      position: absolute;
      top: 90px;
      right: 16px;
      width: 40px;
    }
  }
`;
