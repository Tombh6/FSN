import styled from "styled-components";
import { theme } from "../../globalStyle/theme";

export const NavbarContainer = styled.div`
  height: 75px;
  width: 100%;
  background: #F7F7F7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 10;
`;

export const LeftConatiner = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
`
export const Option = styled.div`
    cursor: pointer;
    font-weight:  ${ props => props.isSelect ? '600' : '400'};
    padding: 5px;
    /* color: ${ props => props.isSelect ? 'white' : '#ffffff95'}; */
`
export const Icon = styled.img`
  background-color: ${theme.colors.bright_purple_blue};
  border-radius: 50px;  
  width: 30px;
  height: 30px;
  margin: 2px;
  justify-content: flex-end;
  padding-right: 15px;
`
export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${theme.colors.grayscale};
    padding-left: 20px;
    padding-right: 10px;
`

export const Logo = styled.img`
  height: 70%;
  padding-left: 20px;
  cursor: pointer;
`;