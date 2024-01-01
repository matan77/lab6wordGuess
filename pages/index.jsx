import React, { useState, useEffect } from "react";

import PlayersLst from "../components/playersLst";
import HiddenWord from "../components/hiddenWord";

import { observer } from "mobx-react-lite";
import playersObserver from "../utils/playersObserver";
import wordObserver from "../utils/wordObserver";

import { getRandomLetter } from "../data/words";



const App = observer(() => {
    const [isStarted, setIsStarted] = useState(false);
    const [delay, setDelay] = useState(300);
    const [secondPassed, setSecondPassed] = useState(0);

    const [gameIntervalId, setGameIntervalId] = useState(null);

    const getRandomPlayer = () => Math.floor(Math.random() * (playersObserver.amountOfPlayers));

    useEffect(() => {
        if (isStarted) {
            setGameIntervalId(setInterval(() => {
                setSecondPassed((secondPassed) => secondPassed + 1);
                let letter = getRandomLetter();
                if (wordObserver.addGuess(letter)) {
                    playersObserver.updatePlayer(letter, getRandomPlayer());
                }
                if (wordObserver.isRevealed) {
                    clearInterval(gameIntervalId);
                    setIsStarted(false);
                }
            }, delay));
        }
        else {
            clearInterval(gameIntervalId);
        }
        return () => {
            clearInterval(gameIntervalId);
        };
    }, [delay, isStarted]);


    // make one game by let random players guess till the word revealed
    const makeGame = () => {

        wordObserver.refreshWord();
        playersObserver.restScore();
        
        setIsStarted(true); // triggers the guesses
    };


    return (
        <>
            <div style={{ textAlign: "center" }} >
                <PlayersLst isStarted={isStarted}></PlayersLst>
            </div >

            <br />
            <br />

            <div style={{ textAlign: "center" }} >
                <label>
                    Guess delay: {delay} ms
                    <br />
                    <input
                        type="range"
                        value={delay}
                        min="1"
                        max="2000"
                        onChange={e => setDelay((delay) => Number(e.target.value))}
                    />
                </label>
                <br />
                {(isStarted || playersObserver.getWinner !== null) &&
                    (<>
                        <HiddenWord ></HiddenWord>
                    </>)}
                {playersObserver.amountOfPlayers < 2 &&
                    <>
                        <h3>Add at least 2 players to be able to start the game</h3>
                    </>
                }
                < br />
                {!isStarted && playersObserver.getWinner && (<>
                    <h2>{`The Winner is ${playersObserver.getWinner.name} with ${playersObserver.getWinner.goodGuesses} guesses`}</h2>
                </>)}
                <button onClick={makeGame} disabled={isStarted || playersObserver.amountOfPlayers < 2}>Start Game</button>

            </div >
        </>);
}

);

export default App;