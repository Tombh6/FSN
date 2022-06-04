import React, { useEffect, useRef } from "react";
import useInput from "../../hooks/useSearch";
import "./style";
import searchIcon from "../../assets/icons/search.svg";
import {
  DeleteIcon,
  FilterContainer,
  Icon,
  IconHover,
  Input,
  InputContainer,
  SearchForm,
} from "./style";
import Filter, { FilterProps } from "../Filter/Filter";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import deleteIcon from "../../assets/icons/exit.svg";
import { debounce } from "lodash";

export interface SearchProps {
  searchFunc: (value: string) => void;
  filter?: FilterProps;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
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

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      await submitHandler(criteria);
    }, 3000)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      submitHandler(event.currentTarget.value);
      setIsTouched(false);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
    debouncedSearch(e.currentTarget.value);
  };

  useOnClickOutside(searchFormRef, () => setIsTouched(false));

  return (
    <SearchForm hasFocus={isTouched} ref={searchFormRef}>
      <Icon alt="" src={searchIcon} />
      <InputContainer>
        <Input
          ref={searchInputRef}
          type="text"
          id="search"
          value={searchValue}
          onChange={handleChange}
          onFocus={() => setIsTouched(true)}
          placeholder="Search"
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
      {props.filter && (
        <FilterContainer>
          <Filter
            filterSearch
            options={props.filter.options}
            name={props.filter.name}
            value={props.filter.value}
            onChangeValue={(value: string) => {
              props.filter?.onChangeValue(value);
            }}
          />
        </FilterContainer>
      )}
    </SearchForm>
  );
};
export default Search;
