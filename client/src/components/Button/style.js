import styled from "styled-components";
import { theme } from "../../globalStyle/theme";

export const ButtonStyled = styled.button`
  height: 36px;
  width: ${(props) =>
    props.size === "small"
      ? `90px`
      : props.size === "large"
      ? `714px`
      : "226px"};
  border-radius: 20px;
  background: ${(props) =>
    props.variant === "secondery"
      ? theme.colors.secondary_grey
      : theme.colors.grayscale};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background: ${(props) =>
      props.variant === "secondery"
        ? theme.colors.secondary_grey_hover
        : theme.colors.primary_blue_hover};
  }
`;
export const Label = styled.p`
  text-align: center;
  white-space: pre;
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-size: 14px;
  letter-spacing: 0.25px;
  padding-right: 7px;
  padding-left: 70x;
`;
export const Icon = styled.img`
  height: 17px;
  transform: rotateY(180deg);
  filter: brightness(3);
`;
