import { RxMagnifyingGlass } from "react-icons/rx";
import { useGlobalContext } from "../Context";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
const SearchForm = () => {
  const {
    filters: { text },
    filterSearch,
  } = useGlobalContext();
  const searchRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.state) searchRef.current.focus();
  }, [location]);

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
