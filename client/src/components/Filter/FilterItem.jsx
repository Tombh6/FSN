import { Item } from "./styles";

const FilterItem = ({name, selected, onFunc}) => {
  return (
    <Item onClick={onFunc}>
      {name}
    </Item>
  );
};
export default FilterItem;
