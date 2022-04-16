import "./style";
import { ButtonStyled, Icon, Label } from "./style";

const Button = ({size,variant, children}) => {
  return (
    <ButtonStyled size={size} variant={variant}>
      <Label>{children}</Label>
    </ButtonStyled>
  );
};

export default Button;
