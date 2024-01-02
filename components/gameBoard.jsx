import { observer } from "mobx-react-lite";
import { useEffect } from 'react';
import HiddenWord from '../components/hiddenWord';


const GameBoard = observer(({ wordObserver, playersObserver, gameObserver }) => {
    const getRandomPlayer = () => Math.floor(Math.random() * (playersObserver.amountOfPlayers));

    useEffect(() => {
        let intervalId;
        if (gameObserver.isStarted) {
            intervalId = setInterval(() => {

                let letter = wordObserver.getGuess();
                if (wordObserver.addGuess(letter)) {
                    playersObserver.updatePlayer(letter, getRandomPlayer());
                }
                if (wordObserver.isRevealed) {
                    clearInterval(intervalId);
                    gameObserver.updateIsStarted(false);
                }
            }, gameObserver.delay);
        }
        else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [gameObserver.delay, gameObserver.isStarted]);


    // make one game by let random players guess till the word revealed
    const startGame = () => {

        wordObserver.refreshWord();
        playersObserver.restScore();

        gameObserver.updateIsStarted(true); // triggers the guesses
    };



    return <div style={{ textAlign: "center" }} >
        <label>
            Guess delay: {gameObserver.delay} ms
            <br />
            <input
                type="range"
                value={gameObserver.delay}
                min="1"
                max="2000"
                onChange={e => gameObserver.updateDelay(Number(e.target.value))}
            />
        </label>
        <br />
        {(gameObserver.isStarted || playersObserver.getWinner !== null) &&
            (<>
                <HiddenWord wordObserver={wordObserver} ></HiddenWord>
            </>)}
        {playersObserver.amountOfPlayers < 2 &&
            <>
                <h3>Add at least 2 players to be able to start the game</h3>
            </>
        }
        < br />
        {!gameObserver.isStarted && playersObserver.getWinner && (<>
            <h2>{`The Winner is ${playersObserver.getWinner.name} with ${playersObserver.getWinner.goodGuesses} guesses`}</h2>
        </>)}
        <button onClick={startGame} disabled={gameObserver.isStarted || playersObserver.amountOfPlayers < 2}>Start Game</button>
    </div >
})

export default GameBoard;