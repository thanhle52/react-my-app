import React, { useState } from "react";
import PlayersGrid from "./PlayersGrid";
import SearchFilter from "./SearchFilter";
import TeamsFilter from "./TeamsFilter";
import PositionFilter from "./PositionFilter";
import Sorter from "./Sorter";
import Toggler from "./Toggler";
import { flags, clubs, players } from "data";

const App = () => {
  const [search, setSearch] = useState("");
  const [team, setTeam] = useState();
  const [position, setPosition] = useState();
  const [sort, setSort] = useState("NAME");
  const [direction, setDirection] = useState(false);
  const [preference, setPreference] = useState();
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="z-50 font-bungee bg-orange-600 text-white text-base font-bold fixed bottom-0 right-0">
        I DO NOT OWN ANY IMAGE
      </div>
      <SearchFilter {...{ search, setSearch }} />
      <TeamsFilter {...{ clubs, team, setTeam, flags }} />
      <PositionFilter {...{ position, setPosition }} />
      <Sorter {...{ sort, setSort, direction, setDirection }} />
      <Toggler {...{ flipped, setFlipped, setPreference }} />
      <PlayersGrid
        {...{
          players,
          clubs,
          search,
          team,
          position,
          sort,
          direction,
          preference,
          flipped,
        }}
      />
    </div>
  );
};

export default App;
