import styled from "styled-components";
import { theme, device } from "./globalStyle/theme";

export const Container = styled.div`
background-color: ${theme.colors.bright_purple_blue};
  min-width: 1200px;
  height: 100%;
  overflow: scroll;
  @media ${device.tablet} {
    min-width: 600px;
  }
  @media ${device.mobile} {
    min-width: 375px;
  }
`