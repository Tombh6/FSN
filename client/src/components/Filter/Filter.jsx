import { useEffect, useRef, useState } from "react";
import { Content, Dropdown, DropdownIcon, Header } from "./styles";
import dropdownIcon from "../../assets/dropdown.svg";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import FilterItem from "./FilterItem";
import { useSelector } from "react-redux";

const Filter = ({options, value, name, disabled, filterSearch, onChangeValue}) => {
  // const filtersState = useSelector(
  //   (state) => state.filters
  // );
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef(null);

  // useEffect(() => {
  //   if (filtersState[value] && options.length > 0) {
  //     setSelected(
  //       options.find(({ value }) => value === filtersState[value])
  //         ?.name
  //     );
  //   } else {
  //     setSelected(name);
  //   }
  // }, [options]);

  const handleClickOutside = () => {
    setIsActive(false);
  };

  const handleChange = (option) => {
    if (option.name === selected || option.name === "All") {
      option.name === "All" &&  setIsActive(false);
      setSelected(name);
      onChangeValue("");
    } else {
      setSelected(option.name);
      setIsActive(false);
      onChangeValue(option.value);
    }
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <Dropdown
      filterSearch={filterSearch ? true : false}
      ref={ref}
      disabled={disabled ? true : false}
    >
      <Header
        disabled={disabled ? true : false}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
        <DropdownIcon alt="" src={dropdownIcon} />
      </Header>
      {isActive && !disabled && (
        <Content>
          {options?.map((option, index) => (
            <FilterItem
              key={index}
              name={option.name}
              selected={selected === option.name}
              onFunc={() => handleChange(option)}
            />
          ))}
        </Content>
      )}
    </Dropdown>
  );
};
export default Filter;
