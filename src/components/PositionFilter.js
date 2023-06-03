import React from "react";

export const positions = {
  GK: [],
  DF: ["SW", "RWB", "LWB", "RB", "LB", "CB"],
  MF: ["DM", "RW", "LW", "RM", "LM", "CM", "AM"],
  FW: ["CF", "RF", "LF", "SS", "ST"]
};

const PositionFilter = ({ position, setPosition }) => {
  return (
    <div className="px-6 py-3 flex flex-wrap">
      {Object.keys(positions).map(bPos => {
        return (
          <React.Fragment key={bPos}>
            <div
              onClick={() => setPosition(position === bPos ? null : bPos)}
              className={
                "font-bungee inline-flex text-2xl items-center font-bold px-1 cursor-pointer" +
                " " +
                (position === bPos
                  ? "text-white bg-orange-400"
                  : "hover:bg-orange-200 text-orange-600")
              }
            >
              {bPos}
            </div>
            {positions[bPos].map(p => {
              return (
                <div
                  key={p}
                  onClick={() => setPosition(position === p ? null : p)}
                  className={
                    "font-bungee inline-flex items-center text-base font-bold px-1 cursor-pointer" +
                    " " +
                    (position === bPos
                      ? "text-white bg-orange-300"
                      : position === p
                      ? "text-white bg-orange-400"
                      : "hover:bg-orange-200 text-orange-600")
                  }
                >
                  {p}
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default React.memo(PositionFilter);
