import React from "react";
import tie from "assets/tie.svg";
import { getLogo } from "utils/image";

const PlayerTeams = ({
  player,
  national,
  clubs,
  setSelectedTeam,
  selectedTeam
}) => {
  return (
    <div className="overflow-x-hidden h-full scrollbar-hide transition-all">
      <div
        onClick={() => setSelectedTeam(player.nationalTeam)}
        className={
          "w-8 h-8 p-1 flex items-center cursor-pointer transition-all " +
          (selectedTeam === player.nationalTeam
            ? ""
            : "filter-grayscale hover:filter-none opacity-25 hover:opacity-100")
        }
      >
        <img
          src={getLogo(national.id)}
          alt={national.title}
          className="max-w-full max-h-full mx-auto"
        />
      </div>
      {player.clubs.map(c => {
        const club = clubs[c];

        return (
          <div
            key={c}
            onClick={() => setSelectedTeam(c)}
            className={
              "w-8 h-8 p-1 flex items-center cursor-pointer transition-all " +
              (selectedTeam === c
                ? ""
                : "filter-grayscale hover:filter-none opacity-25 hover:opacity-100")
            }
          >
            <img
              src={getLogo(club.id)}
              alt={club.title}
              className="max-w-full max-h-full mx-auto"
            />
          </div>
        );
      })}
      {player.retired && (
        <div
          onClick={() => setSelectedTeam("RETIRED")}
          className={
            "w-8 h-8 p-1 flex items-center cursor-pointer transition-all " +
            (selectedTeam === "RETIRED"
              ? "opacity-75"
              : "filter-grayscale hover:filter-none opacity-25 hover:opacity-75")
          }
        >
          <img
            src={tie}
            alt="Retired"
            className="max-w-full max-h-full mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(PlayerTeams);
