import styled, { keyframes } from "styled-components";

const ModalIn = keyframes`
  0% { 
    opacity: 0;
    transform: translate(-50%, -200%); 
  }

  100% { 
    opacity: 1;
    transform: translate(-50%, -50%); 
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #022e3c;
  filter: opacity(0.4);
  backdrop-filter: brightness(0.2);
`;

export const ContainerWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  animation: ${ModalIn} 0.5s;

  #modal {
    -moz-transition: all 0.1s ease-in;
    -o-transition: all 0.1s ease-in;
    -webkit-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
    @media (min-width: 768px) {
    }
  }
`;

export const Modal = styled.div`
  position: relative;
  z-index: 100;
  width: 90vw;
  height: fit-content;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 8px;
  border-top: 3px solid #007eff;

  @media (min-width: 768px) {
    max-width: 520px;
    padding: 30px 0;
    box-shadow: 0 0 30px #2c3e504f;
  }
`;

export const Header = styled.div`
  max-width: 346px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Footer = styled.div`
  width: 100%;
  padding: 20px 20px 0;
`;

export const Downloads = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px 8px;
  margin-top: 12px;
`;

export const CloseButtonWrapper = styled.button`
  background-color: transparent;
  position: absolute;
  top: 2px;
  right: 2px;
  width: 36px;
  height: 36px;

  @media (min-width: 460px) {
    width: 44px;
    height: 44px;
  }
`;

export const ModalTitle = styled.p`
  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  color: #2c3e50;
  padding-top: 16px;
  margin-bottom: 20px;

  span {
    color: #2c83fb;
  }

  @media (min-width: 460px) {
    padding-top: 0;
    font-size: 16px;
  }
`;

export const FooterTitle = styled.p`
  font-family: "Plus Jakarta Sans";
  font-size: 13px;
  font-weight: 800;
  color: #2c3e50;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-family: "Plus Jakarta Sans";
  font-size: 12px;
  font-weight: 600;
  color: #2c3e50;
  max-height: 62px;
  overflow: auto;
  padding-right: 8px;
  margin-bottom: 20px;
`;
