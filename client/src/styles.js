import styled from "styled-components";
import { theme } from "./globalStyle/theme";

export const Container = styled.div`
background-color: ${theme.colors.bright_purple_blue};
  height: 100%;
`

export const MainLayout = styled.div`
    height: 70%;
    padding: 10px ;
    background-color: ${theme.colors.bright_purple_blue};
`

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