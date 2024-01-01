import { BigHead } from "@bigheads/core";
import { getRandomBighead } from "../data/bigHeadDataRandomizer";
import { useState } from "react";


export default function PlayerCard({ player, isStarted, onDelete }) {
    const [bigHead, setBigHead] = useState(getRandomBighead());
    const onChangeBigHead = () => setBigHead(getRandomBighead());
    return <>
        <div style={{ margin: "5px" }}>
            <BigHead {...bigHead} ></BigHead>
            <h2>{player.name}</h2>
            {player.letter && <h3>{`guessed [${player.letter}]`}</h3>}
            <h3>{`good guesses: ${player.goodGuesses}`}</h3>
            <button style={{ margin: "5px" }} onClick={onDelete} disabled={isStarted}>Delete</button>
            <button style={{ margin: "5px" }} onClick={onChangeBigHead}>Change BigHead</button>
        </div >
    </>;

}