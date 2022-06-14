import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { filtersActions } from "../store/slicers/filtersSlice";
import { isNotEmpty } from "../utils/utils";
import useLocalStorage from "./useLocalStorage";

const useInput = (value: string) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(value);
  const [isTouched, setIsTouched] = useState(false);
  const [recentItems, setRecentItems] = useLocalStorage<string[]>("items", []);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const filtersState = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    setSearchValue(filtersState.searchInput);
  }, [filtersState.searchInput]);

  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const filterRecentItems = recentItems.filter(
    (search) => search.includes(searchValue) && searchValue !== search
  );

  const submitHandler = (criteria: string) => {
    if (!recentItems.includes(criteria) && isNotEmpty(criteria)) {
      setRecentItems((recentItems) => [...recentItems, criteria]);
    }
    searchInputRef.current?.blur();
    dispatch(filtersActions.setSearchInput(criteria));
  };
  const reset = () => {
    setSearchValue("");
    setIsTouched(false);
    dispatch(filtersActions.setSearchInput(searchValue));
  };

  const onChooseRecentItem = (item: string) => {
    setSearchValue(item);
    setIsTouched(false);
  };
  const onDeleteRecentItem = (item: string) => {
    const newArray = recentItems.filter((element) => element !== item);
    setRecentItems(newArray);
    if (!newArray.length) {
      setIsTouched(false);
    }
  };
  const onClearRecentItems = () => {
    setRecentItems([]);
  };

  return {
    searchValue,
    isTouched,
    valueChangeHandler,
    setIsTouched,
    setSearchValue,
    reset,
    submitHandler,
    searchInputRef,
    filterRecentItems,
    onChooseRecentItem,
    onDeleteRecentItem,
    onClearRecentItems,
  };
};

export default useInput;
