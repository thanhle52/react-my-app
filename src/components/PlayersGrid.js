import React from "react";
import PlayerCard from "./PlayerCard";
import { positions } from "./PositionFilter";
import accents from "remove-accents";
import { AutoSizer, List } from "react-virtualized";

const BOX_WIDTH = 224;
const BOX_HEIGHT = 264;

const PlayersGrid = ({
  search,
  team,
  position,
  players,
  clubs,
  sort,
  direction,
  preference,
  flipped,
}) => {
  const flatPositions = [];

  Object.keys(positions).forEach((k) => {
    flatPositions.push(k);

    positions[k].forEach((p) => flatPositions.push(p));
  });

  const playersFiltered = Object.keys(players)
    .map((key) => {
      const player = players[key];
      player.id = key;

      return player;
    })
    .filter(
      (player) =>
        !position ||
        player.position === position ||
        (positions[position] && positions[position].includes(player.position))
    )
    .filter(
      (player) =>
        !team || player.clubs.includes(team) || player.nationalTeam === team
    )
    .filter(
      (player) =>
        !search ||
        player.id.includes(search.toLowerCase().replace(" ", "")) ||
        player.name.toLowerCase().includes(search.toLowerCase()) ||
        accents(player.name.toLowerCase()).includes(search.toLowerCase()) ||
        player.number === parseInt(search)
    )
    .sort((a, b) => {
      const pa = a.name.split(" ");
      const pb = b.name.split(" ");

      let ca = accents(pa[pa.length - 1]).toLowerCase();
      let cb = accents(pb[pb.length - 1]).toLowerCase();
      let na = 0;
      let nb = 0;

      if (sort === "NUMBER") {
        na = a.number;
        nb = b.number;
      }

      if (sort === "POSITION") {
        na = flatPositions.indexOf(a.position);
        nb = flatPositions.indexOf(b.position);
      }

      if (sort === "COUNTRY") {
        ca = a.nationalTeam + ca;
        cb = b.nationalTeam + cb;
      }

      return na > nb ? 1 : na < nb ? -1 : a.ca > cb ? 1 : ca < cb ? -1 : 0;
    });

  if (direction) {
    playersFiltered.reverse();
  }

  return (
    <div className="bg-green-700 px-2 py-2 mt-4">
      <div
        style={{ minHeight: "250px" }}
        className="border-4 border-white px-6 py-5 relative overflow-hidden"
      >
        <div className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-0 -ml-4 -mt-4"></div>
        <div className="w-8 h-8 rounded-full border-4 border-white absolute top-0 right-0 -mr-4 -mt-4"></div>
        <div className="w-8 h-8 rounded-full border-4 border-white absolute bottom-0 left-0 -ml-4 -mb-4"></div>
        <div className="w-8 h-8 rounded-full border-4 border-white absolute bottom-0 right-0 -mr-4 -mb-4"></div>

        {playersFiltered.length > 0 ? (
          <AutoSizer disableHeight>
            {({ width }) => {
              const numberOfBoxesPerRow = Math.floor(width / BOX_WIDTH);
              const rowCount = Math.ceil(
                playersFiltered.length / numberOfBoxesPerRow
              );

              return (
                <List
                  className="focus:outline-none"
                  width={width}
                  height={rowCount > 1 ? 528 : 264}
                  rowCount={rowCount}
                  rowHeight={BOX_HEIGHT}
                  rowRenderer={({ key, index, style }) => {
                    return (
                      <div
                        key={key}
                        style={style}
                        className="flex items-center justify-center"
                      >
                        {playersFiltered
                          .slice(
                            index * numberOfBoxesPerRow,
                            index * numberOfBoxesPerRow + numberOfBoxesPerRow
                          )
                          .map((player) => {
                            const preferenceTeam =
                              preference === "NATIONAL"
                                ? player.nationalTeam
                                : preference === "FIRST"
                                ? player.clubs[0]
                                : preference === "LAST"
                                ? player.last
                                  ? player.last
                                  : player.clubs[player.clubs.length - 1]
                                : preference === "NOW"
                                ? player.retired
                                  ? "RETIRED"
                                  : player.last
                                  ? player.last
                                  : player.clubs[player.clubs.length - 1]
                                : team || player.nationalTeam;

                            return (
                              <PlayerCard
                                key={player.id}
                                id={player.id}
                                player={players[player.id]}
                                teamId={preferenceTeam}
                                clubs={clubs}
                                flipped={flipped}
                              />
                            );
                          })}
                      </div>
                    );
                  }}
                />
              );
            }}
          </AutoSizer>
        ) : (
          <div className="text-center absolute w-full h-full top-0 left-0 flex-wrap text-green-500 flex flex-col justify-center items-center font-bungee font-bold">
            <div className="text-5xl leading-none">No players found</div>
            <div className="text-lg">
              Change filters criteria for other results
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(PlayersGrid);
