
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
 const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const validPaths = ['perfumes', 'makeup', 'skincare'];
    const isPathValid = validPaths.some(path => location.pathname.includes(path));

    if (isPathValid && showSearch) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  return showSearch && visible? (
    <div className="border-t border-t-stone-200 bg-stone-50 text-center ">
      <div className="inline-flex items-center justify-center border border-stone-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
          <div className="w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-3 flex-1 outline-none bg-inherit text-sm "
          type="text"
          placeholder="Search"
        />
      
     
   
      <div onClick={()=>setShowSearch(false)} className="w-3 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
      </div>
      </div>
        
      
    </div>
  ) : null;
};

export default SearchBar;
