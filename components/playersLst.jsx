import React from "react";
import PlayerCard from "./playerCard";
import playersObserver from "../utils/playersObserver";

const PlayersLst = ({ isStarted }) => {

    const onNewPlayer = () => {
        let name = prompt("Enter player Name:",
            "matan");
        if (name) {
            playersObserver.addPlayer(name);
        }
    };
    return <>
        <div>
            <h1>{`Players ${playersObserver.amountOfPlayers}/5`}</h1>
            <button onClick={onNewPlayer} disabled={playersObserver.amountOfPlayers === 5}>Add Player</button>
            <div style={{ display: "flex" }}>

                {playersObserver.players.map((player, index) => (
                    <PlayerCard key={index} player={{ ...player }} isStarted={isStarted} onDelete={() => playersObserver.delPlayer(index)} />
                ))}
            </div>
        </div>
    </>;
};
export default PlayersLst;