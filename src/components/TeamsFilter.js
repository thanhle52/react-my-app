import React from "react";
import { getLogo } from "utils/image";

const TeamsFilter = ({ team, setTeam, clubs, flags }) => {
  const teams = { "*national": [] };

  Object.entries(clubs).forEach(([, v]) => {
    if (v.isNational) {
      teams["*national"].push(v);
    } else {
      if (!teams[v.country]) {
        teams[v.country] = [];
      }

      teams[v.country].push(v);
    }
  });

  return (
    <div className="px-6 overflow-x-auto scrollbar-hide flex flex-nowrap">
      {Object.keys(teams)
        .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
        .map(k => {
          const r = teams[k];

          return (
            <div key={k} className="inline-block m-1">
              <div className="text-lg pb-1 text-center border-b border-dashed border-orange-200">
                {flags[k]}
              </div>
              <div className="w-48 h-32 scrollbar-hide justify-center overflow-auto pt-3 flex flex-wrap">
                {r
                  .sort((a, b) => {
                    const c1 = (a.country || "1") + a.title;
                    const c2 = (b.country || "1") + b.title;

                    return c1 > c2 ? 1 : c1 < c2 ? -1 : 0;
                  })
                  .map(t => {
                    return (
                      <div
                        key={t.id}
                        title={t.title}
                        onClick={() => setTeam(team === t.id ? null : t.id)}
                        className={
                          "inline-flex items-center m-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full " +
                          (team === t.id
                            ? "border-orange-400"
                            : "border-transparent bg-orange-200 hover:bg-orange-300")
                        }
                      >
                        <img
                          src={getLogo(t.id)}
                          alt={t.title}
                          className="max-h-full max-w-full mx-auto"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default React.memo(TeamsFilter);
