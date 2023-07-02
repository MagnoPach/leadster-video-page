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

export const Container = styled.div`
  position: relative;
  z-index: 100;
  width: 90vw;
  height: fit-content;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 720px;
    padding: 30px 0;
    box-shadow: 0 0 30px #2f04164f;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButtonWrapper = styled.button`
  background-color: transparent;
  position: absolute;
  top: 2px;
  right: 2px;
  width: 44px;
  height: 44px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  color: #2f0416;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #2f0416;
  margin-bottom: 6px;
`;
