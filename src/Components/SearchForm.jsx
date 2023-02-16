import { RxMagnifyingGlass } from "react-icons/rx";
import { useGlobalContext } from "../Context";
import { useEffect, useRef } from "react";

const SearchForm = () => {
  const {
    filters: { text },
    filterSearch,
  } = useGlobalContext();
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div className='search-form'>
      <RxMagnifyingGlass />
      <input
        type='text'
        name='text'
        value={text}
        className='input'
        placeholder='Search for a country...'
        onChange={filterSearch}
        ref={searchRef}
      />
    </div>
  );
};

export default SearchForm;
