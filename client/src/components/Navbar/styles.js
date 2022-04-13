import styled from "styled-components";
import { theme } from "../globalStyle/theme";

export const NavbarContainer = styled.div`
  height: 75px;
  width: 100%;
  background: ${theme.colors.grayscale};
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    color: white;
    width: 30%;
`

export const Logo = styled.img`
  height: 70%;
  padding-left: 20px;
`;