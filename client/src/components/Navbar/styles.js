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
  font-size: 14px;
`;

export const Option = styled.div`
    cursor: pointer;
    color: ${ props => props.isSelect ? 'white' : '#ffffff95'};
`
export const Icon = styled.img`
  background-color: lightgray;
  border-radius: 50px;
  width: 30px;
  height: 30px;
`
export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    color: white;
    width: 20%;
    align-items: center;
`

export const Logo = styled.img`
  height: 70%;
  padding-left: 20px;
`;