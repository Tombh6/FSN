
import exitIcon from "../../assets/exit.svg";

import {
  Header,
  Item,
  Dropdown,
  ExIcon,
  ItemContainer,
  Container,
  ClearBtn,
} from "./styles";


const SearchDropdown = ({
  items,
  onChooseItem,
  onDeleteItem,
  onClearItems,
}) => {

  return (
    <Dropdown>
      <Header>
        <p>recent searches</p>
        <ClearBtn onClick={onClearItems}>clear</ClearBtn>
      </Header>
      <Container>
        {items.map((item, index) => (
          <ItemContainer key={index}>
            <Item
              onClick={() => {
                onChooseItem(item);
              }}
            >
              {item}
            </Item>
            <ExIcon onClick={(e) => onDeleteItem(item)} src={exitIcon} />
          </ItemContainer>
        ))}
      </Container>
    </Dropdown>
  );
};

export default SearchDropdown;
