import React, { useRef } from "react";

const SearchFilter = ({ search, setSearch }) => {
  const elRef = useRef();

  return (
    <div className="px-6 py-3 flex">
      <div className="relative flex items-center justify-center">
        <input
          ref={elRef}
          placeholder="Search by name or number..."
          className={
            "font-bungee text-lg font-bold p-2 focus:bg-orange-400 outline-none placeholder-orange-600 focus:text-white focus:placeholder-orange-200" +
            " " +
            (search
              ? "text-white bg-orange-400"
              : "bg-transparent text-orange-600")
          }
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button
            onClick={() => {
              setSearch("");
              elRef.current.focus();
            }}
            className="text-orange-300 hover:text-orange-200 font-bold text-xl absolute w-8 h-8 right-0 mr-1"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(SearchFilter);
