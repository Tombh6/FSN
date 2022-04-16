import React, { useRef } from "react";
import useInput from "../../hooks/useSearch";
import searchIcon from "../../assets/search.svg";
import {
  DeleteIcon,
  Icon,
  IconHover,
  Input,
  InputContainer,
  SearchForm,
} from "./styles";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import deleteIcon from "../../assets/exit.svg";



const SearchBar = ({searchFunc, filter}) => {
  const {
    searchValue,
    isTouched,
    setSearchValue,
    setIsTouched,
    submitHandler,
    searchInputRef,
    filterRecentItems,
    onChooseRecentItem,
    onDeleteRecentItem,
    onClearRecentItems,
  } = useInput("");
  const searchFormRef = useRef(null);

  const keyDownHandler = (event) => {
    if (event.code === "Enter") {
      submitHandler(event);
      setIsTouched(false);
    }
  };

  const valueChangeHandler = (event) => {
    setSearchValue(event.currentTarget.value);
  };

  useOnClickOutside(searchFormRef, () => setIsTouched(false));

  return (
    <SearchForm hasFocus={isTouched} ref={searchFormRef}>
      <Icon onClick={submitHandler} src={searchIcon} />
      <InputContainer>
        <Input
          ref={searchInputRef}
          type="text"
          id="search"
          value={searchValue}
          onChange={valueChangeHandler}
          onFocus={() => setIsTouched(true)}
          placeholder="Search for activites"
          autoComplete="off"
          onKeyDown={keyDownHandler}
        ></Input>
        {searchValue && (
          <IconHover>
            <DeleteIcon
              alt="deleteIcon"
              onClick={() => setSearchValue("")}
              src={deleteIcon}
            />
         </IconHover>
        )}
      </InputContainer>
      {isTouched && filterRecentItems.length ? (
        <SearchDropdown
          items={filterRecentItems}
          onChooseItem={onChooseRecentItem}
          onDeleteItem={onDeleteRecentItem}
          onClearItems={onClearRecentItems}
        />
      ) : null}
    </SearchForm>
  );
};
export default SearchBar;
