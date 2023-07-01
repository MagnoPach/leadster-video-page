"use client";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: #fbfbfd;

  .container {
    width: 100%;
    border-bottom: 1px solid #e9ecf3;
    padding: 60px 0;
  }

  @media (min-width: 768px) {
  }
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-bottom: 80px;

  a {
    appearance: none;
    text-decoration: none;

    .logo-container {
    }
  }

  .leadster-slogan {
    font-family: "Plus Jakarta Sans";
    font-size: 15px;
    font-weight: 400;
    color: #677294;
    text-align: center;
  }

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const LinkColummnsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 480px) {
    justify-content: space-around;
  }
`;

export const FooterFooter = styled.div`
  width: 100%;
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
  margin: 0 auto;
  padding: 30px 20px;

  .copyright,
  .adress {
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #7f88a6;

    a {
      color: #007dff;
    }
  }

  .adress {
    margin-top: 12px;
  }

  @media (min-width: 570px) {
    flex-direction: row;

    .adress {
      margin-top: 0;
    }
  }
`;

export const LinkColumnTitle = styled.p`
  font-family: "Plus Jakarta Sans";
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  text-align: left;
  margin-bottom: 30px;

  @media (min-width: 768px) {
  }
`;

export const Contact = styled.p`
  font-family: "Plus Jakarta Sans";
  font-size: 15px;
  font-weight: 600;
  color: #2c3e50;
  text-align: left;
  margin-bottom: 16px;

  span {
    color: #677294;
    margin-left: 6px;
  }

  @media (min-width: 768px) {
  }
`;

export const LineLabel = styled.li`
  font-family: "Plus Jakarta Sans";
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 15px;

  a {
    color: #677294;
    position: relative;
    transition: color 0.2s linear;
    display: inline-block;
  }

  &:hover {
    a {
      color: #00aff0;
    }
  }

  @media (min-width: 768px) {
  }
`;
