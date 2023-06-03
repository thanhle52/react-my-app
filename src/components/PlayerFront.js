import React from "react";
import { getLogo, getPlayer, getSignature } from "utils/image";

const PlayerFront = ({ id, player, team, national }) => {
  return (
    <div
      className="w-full h-full bg-cover bg-no-repeat bg-center select-none transition-all"
      style={{
        backgroundColor: team.color1,
        backgroundImage: `url("${getPlayer(id, team.id)}")`,
      }}
    >
      <p
        className="font-bungee tracking-tighter font-black text-4xl pt-1 pl-3"
        style={{ color: team.color2 }}
      >
        {player.number}
        <span className="text-base opacity-50">{player.position}</span>
      </p>
      <div className="w-4/5 h-full -mt-2">
        <img
          src={team.id === "retired" ? getLogo(national.id) : getLogo(team.id)}
          alt={team.id === "retired" ? national.title : team.title}
          className="logo-filter opacity-25 -ml-10"
        />
      </div>
      <div className="absolute bottom-0 pb-3" style={{ color: team.color1 }}>
        <p
          className="font-bungee font-semibold tracking-tighter text-lg"
          style={{ backgroundColor: team.color2 }}
        >
          {player.name.split(" ").map((txt, i, arr) => {
            if (arr.length !== i + 1) {
              return (
                <span className="text-xs" key={i}>
                  {txt}
                </span>
              );
            }
            return <span key={i}>{txt.replace(/\|/g, " ")}</span>;
          })}
        </p>
      </div>
      {false !== player.signature && (
        <div className="w-12 h-12 flex items-center justify-center absolute right-0 bottom-0 mb-12 mr-5">
          <img
            src={getSignature(id)}
            alt={id}
            className="signature-filter max-w-full max-h-full"
          />
        </div>
      )}
      <div className="flex flex-row-reverse items-center justify-center absolute right-0 bottom-0 mr-2 text-2xs text-shadow">
        {player.worldCups > 0 && (
          <span className="text-yellow-400">
            {"★".repeat(player.worldCups)}
          </span>
        )}
        {player.championsLeagues > 0 && (
          <span className="text-gray-400">
            {"★".repeat(player.championsLeagues)}
          </span>
        )}
      </div>
    </div>
  );
};

export default React.memo(PlayerFront);
