import React, { useState, useEffect } from "react";

import PlayersLst from "../components/playersLst";

import PlayersObserver from "../utils/playersObserver";
import WordObserver from "../utils/wordObserver";
import GameObserver from "../utils/gameObserver";
import GameBoard from "../components/gameBoard";

const App = () => {

    const playersObserver = new PlayersObserver();
    const wordObserver = new WordObserver();
    const gameObserver = new GameObserver();

   


    return (
        <>
            <div style={{ textAlign: "center" }} >
                <PlayersLst playersObserver={playersObserver} isStarted={gameObserver.isStarted}></PlayersLst>
            </div >

            <br />
            <br />
            <GameBoard  wordObserver={wordObserver} playersObserver={playersObserver}  gameObserver={gameObserver} ></GameBoard>
           
        </>);
};

export default App;