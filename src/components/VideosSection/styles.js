import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 48px 0;

  .container {
    width: 100%;
    max-width: 1032px;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
  }
`;

export const FilterWrapper = styled.div`
  /* flex flex-col gap-3 justify-center lg:flex-row items-center py-5 border-b border-slate-300 */
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
      font-family: "Plus Jakarta Sans";
      font-size: 13px;
      font-weight: 700;
      margin-right: 8px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const GridContainer = styled.div`
  /* w-full max-w-[1320px] m-auto grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-5 py-12 border-b border-slate-300 */
  position: "relative";
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
