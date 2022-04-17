import styled from "styled-components";
import { theme } from "../../globalStyle/theme";

export const BodyContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
  padding-bottom: 50px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
`;

export const MainLayout = styled.div`
    height: 70%;
    padding: 10px ;
    background-color: ${theme.colors.bright_purple_blue};
`
export const ArticlesContainer = styled.div`
  width: 100%;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  border-bottom: 1px solid #d9dbe9;
  padding-top: 20px;
  padding-bottom: 20px;

  & > div:not(:last-child) {
    margin-right: 10px;
  }
`;