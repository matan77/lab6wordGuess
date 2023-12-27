import React, { useState } from "react";
import { getRandomWord, getRandomLetter } from "../data/words";
import PlayersLst from "../components/playersLst";
import HiddenWord from "../components/hiddenWord";

export default function App() {
    const [players, setPlayers] = useState([]);
    return (
        <>
            <div style={{ textAlign: "center" }} >
                <PlayersLst players={players} setPlayers={setPlayers}></PlayersLst>
            </div >
            <br />
            <br />
            <br />
            <br />
            <br />

            <HiddenWord word={getRandomWord()}></HiddenWord>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button>Start Game</button>


        </>);
}