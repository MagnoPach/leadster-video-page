import styled, { keyframes } from "styled-components";

const leftDisplay = keyframes`
  0% { 
    opacity: 0;
    transform: translateX(-200px); 
  }

  100% { 
    opacity: 1;
    transform: translateX(0px); 
  }
`;

const rightDisplay = keyframes`
  0% { 
    opacity: 0;
    transform: translateX(200px); 
  }

  100% { 
    opacity: 1;
    transform: translateX(0px); 
  }
`;

export const Section = styled.section`
  width: 100%;
  background-color: #f9fcff;
  position: relative;
  overflow: hidden;
  padding: 48px 0;

  .floating-square {
    position: absolute;
    background-color: #f2f9ff;
    height: 1022px;
    border-radius: 80px;
    left: -190px;
    transform: rotate(-43deg);
    top: 200px;
    width: 870px;
    border-radius: 80px;
    z-index: 2;
  }

  .container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    margin: 0 auto;
    z-index: 4;
  }

  .left-animation {
    opacity: 1;
    animation: 1s ${leftDisplay};
  }
  .right-animation {
    opacity: 1;
    animation: 2s ${rightDisplay};
  }

  @media (min-width: 768px) {
    padding: 38px 0;
    .container {
      max-width: 720px;
      padding: 0 20px;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`;

export const CompareWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DemonstrationContainer = styled.div`
  opacity: 0;
  transition: 0.5s;
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 54%;
  }
`;

export const CompareImageContainer = styled.div`
  margin-bottom: 40px;
  transition: 0.5s;

  div {
    opacity: 0;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 47%;
    margin-right: 40px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  .rd-seal {
    margin-top: 16px;
  }

  @media (min-width: 460px) {
    .rd-seal {
      margin-left: 16px;
    }
  }
  @media (min-width: 472px) {
    .rd-seal {
      margin-top: 0;
      margin-left: 16px;
    }
  }
`;

export const DemonstrationFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 16px;

  .no-card-wrapper,
  .rate-wrapper {
    display: flex;
    align-items: center;
  }

  .no-card-text,
  .rating-text {
    font-family: "Plus Jakarta Sans";
    font-size: 15px;
    font-weight: 500;
    text-align: left;
    color: #2c3e50;
  }

  .no-card-text {
    margin: 0 4px;
  }

  .rating-text {
    margin-top: 4px;
    margin-left: 4px;
  }

  @media (min-width: 530px) {
    .rating-text {
      margin-top: 0;
    }
  }
`;

export const DemonstationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 30px 0 rgba(12, 0, 46, 0.1);
  background-color: #007dff;
  font-family: "Plus Jakarta Sans";
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  padding: 14px 30px;
  border-radius: 45px;
  border: 1px solid #007dff;
  transition: 0.3s;
  cursor: pointer;

  svg {
    margin-left: 8px;
  }

  &:hover {
    color: #007dff;
    background: #fff;
    box-shadow: none;
    border: 1px solid #1857c1;
    transition: 0.3s;

    svg {
      fill: #007dff;
      margin-left: 8px;
    }
  }

  @media (min-width: 992px) {
  }
`;

export const H2 = styled.h2`
  max-width: 450px;
  font-family: "Plus Jakarta Sans";
  font-size: 28px;
  font-weight: 500;
  text-align: left;
  color: #2c3e50;
  margin-bottom: 8px;

  @media (min-width: 530px) {
    font-size: 38px;
  }
`;

export const H3 = styled.h3`
  font-family: "Plus Jakarta Sans";
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #2c3e50;
  margin: 24px 0;

  @media (min-width: 530px) {
  }
`;
