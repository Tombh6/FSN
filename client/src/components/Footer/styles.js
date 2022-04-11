import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 180px;
  width: 100%;
  background-color: black;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
`;
export const Image = styled.img`
`;

export const ColumnContainer = styled.div`
  display: flex;
`
export const Content = styled.div`
  max-width: 1000px;
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  .right-section {
    font-size: 14px;
    color: #ffffff95;
  }
`;

export const Section = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  justify-content: center;
  gap: 16px;
`;

export const ImageContainer = styled.div`
  width: 64px;
  height: 64px;
`;
