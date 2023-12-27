import React from "react";
import PlayerCard from "./playerCard";

export default function PlayersLst({ players, setPlayers }) {
    const onNewPlayer = () => {
        setPlayers([...players, {
            name: prompt("Enter player Name:",
                "matan"), goodGuesses: 0
        }]);
    };

    const deletePlayer = (index) => {
        const updatedPlayers = [...players];
        updatedPlayers.splice(index, 1);
        setPlayers(updatedPlayers);
    }

    return <>
        <div>
            <h1>{`Players ${players.length}/5`}</h1>
            <button onClick={onNewPlayer} disabled={players.length == 5}>Add Player</button>
            <div style={{ display: "flex" }}>

                {players.map((player, index) => (
                    <div key={index} style={{ margin: "5px" }} >
                        <PlayerCard player={{ ...player }} onDelete={() => deletePlayer(index)} />
                    </div>
                ))}
            </div>
        </div>
    </>;
};