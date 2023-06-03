import React, { useState, useEffect } from "react";
import Tilt from "./Tilt";
import Card from "./Card";
import PlayerFront from "./PlayerFront";
import PlayerBack from "./PlayerBack";
import PlayerTeams from "./PlayerTeams";

const PlayerCard = ({ id, player, teamId, clubs, flipped }) => {
  const [selectedTeam, setSelectedTeam] = useState(teamId);

  useEffect(() => {
    setSelectedTeam(teamId);
  }, [teamId]);

  const national = clubs[player.nationalTeam];
  const team =
    selectedTeam === "RETIRED"
      ? {
          id: "retired",
          title: "Retired",
          brand: "adidasvintage",
          color1: "#FFFFFF",
          color2: "#1A202C"
        }
      : clubs[selectedTeam];

  return (
    <div className="flex my-2 h-64">
      <Tilt
        className="w-48 h-64 z-10"
        options={{
          max: 10,
          speed: 300,
          scale: 1.05,
          gyroscope: false,
          glare: true,
          "max-glare": 0.4
        }}
      >
        <Card flipped={flipped}>
          <PlayerFront {...{ id, player, team, national }} />
          <PlayerBack {...{ player, team, national }} />
        </Card>
      </Tilt>
      <PlayerTeams
        {...{ player, team, national, clubs, setSelectedTeam, selectedTeam }}
      />
    </div>
  );
};

export default React.memo(PlayerCard);
