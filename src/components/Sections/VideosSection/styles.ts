import styled from 'styled-components';

import { activeButtonProps } from '../../../Models/Models';

export const Section = styled('section')`
  width: 100%;
  padding: 48px 0;

  .container {
    width: 100%;
    max-width: 320px;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media (min-width: 574px) {
    .container {
      max-width: 558px;
    }
  }
  @media (min-width: 709px) {
    .container {
      max-width: 698px;
    }
  }
  @media (min-width: 1050px) {
    .container {
      max-width: 1032px;
    }
  }
`;

export const FilterWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 8px;

  .select-wrapper {
    display: flex;
    align-items: center;

    label {
      width: auto;
      font-family: 'Plus Jakarta Sans';
      font-size: 10px;
      font-weight: 700;
      margin-right: 8px;
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;

    .select-wrapper {
      label {
        width: 86px;
        font-size: 13px;
      }
    }
  }
`;

export const GridContainer = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  gap: 20px 16px;
  justify-content: center;
  border-bottom: 1px solid #dcdcdc;
  padding: 24px 0;
  transition: 0.2s;

  @media (min-width: 710px) {
    grid-template-columns: repeat(auto-fill, 320px);
  }
`;

export const PaginationWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  .page-text {
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-weight: 600;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-left: 16px;
    color: #2c3e50;
  }
`;

export const PaginationButtons = styled('button')<activeButtonProps>`
  background-color: transparent;
  font-family: 'Plus Jakarta Sans';
  font-size: 16px;
  font-weight: ${(props) => (props.isactive === 'true' ? 800 : 600)};
  color: ${(props) => (props.isactive === 'true' ? '#2c83fb' : '#2c3e50')};
  border: ${(props) =>
    props.isactive === 'true' ? '1px solid #2c83fb' : 'none'};
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 12px;
  transition: 0.2s;

  &:hover {
    color: ${(props) => (props.isactive === 'true' ? '#2c3e50' : '#2c83fb')};
    opacity: ${(props) => (props.isactive === 'true' ? 0.8 : 1)};
    border-color: ${(props) =>
      props.isactive === 'true' ? '#2c3e50' : '#2c83fb'};
  }
`;
