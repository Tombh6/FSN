import styled from "styled-components";
import { theme } from "../../globalStyle/theme";

export const SearchForm = styled.form`
  width: 280px;
  height: 34px;
  border-radius: 50px;
  border: 1px solid #AFAFAF;
  display: flex;
  flex-direction: row;
  background: ${theme.colors.white};
  padding: 3px;
  position: relative;
  align-items: center;
  font-family: "Roboto";
  transition: all 0.45s ease-in-out;
  flex-grow: ${({ hasFocus }) => hasFocus && 0.3};
`;
export const InputContainer = styled.div`
  border: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
export const IconHover = styled.div`
  margin-right: 7px;
  cursor: pointer;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: -10;
  :hover {
    background-color: ${theme.colors.secondary_grey};
  }
`;
export const DeleteIcon = styled.img`
  width: 17px;
  height: 17px;
  text-align: center;
  align-self: center;
`;
export const Input = styled.input`
  width: 70%;
  border: 0;
  font-size: 14px;
  color: ${theme.colors.text_lightblue};
  outline: none;

  :focus {
    border: none;
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 22px;
    color: ${theme.colors.text_lightblue};
  }
`;
export const Icon = styled.img`
  width: 5%;
  border: 0;
  height: 23px;
  padding: 15px 18px 15px 18px;
  cursor: pointer;
`;
export const FilterContainer = styled.div`
  width: 175px;
`;
