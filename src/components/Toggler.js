import React from "react";

const Toggler = ({ flipped, setFlipped, setPreference }) => {
  return (
    <div className="font-bungee px-6 pt-3 flex flex-wrap justify-end">
      <div
        className="outline-none hover:bg-orange-200 text-orange-600 inline-flex text-base items-center font-bold px-2 cursor-pointer"
        onClick={() => setPreference("NATIONAL")}
      >
        NATIONAL
      </div>
      <div
        className="outline-none hover:bg-orange-200 text-orange-600 inline-flex text-base items-center font-bold px-2 cursor-pointer"
        onClick={() => setPreference("FIRST")}
      >
        FIRST
      </div>
      <div
        className="outline-none hover:bg-orange-200 text-orange-600 inline-flex text-base items-center font-bold px-2 cursor-pointer"
        onClick={() => setPreference("LAST")}
      >
        LAST
      </div>
      <div
        className="outline-none hover:bg-orange-200 text-orange-600 inline-flex text-base items-center font-bold px-2 cursor-pointer"
        onClick={() => setPreference("NOW")}
      >
        NOW
      </div>
      <div
        className="outline-none hover:bg-orange-200 text-orange-600 inline-flex text-base items-center font-bold px-2 cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        FLIP
      </div>
    </div>
  );
};

export default React.memo(Toggler);
