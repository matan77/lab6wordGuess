import React, { useState } from "react";

import PlayersLst from "../components/playersLst";
import HiddenWord from "../components/hiddenWord";
import playersObserver from "../utils/playersObserver";
import { observer } from "mobx-react-lite";

const App = observer(() => {
    let [isStarted, setIsStarted] = useState(false);
    return (
        <>
            <div style={{ textAlign: "center" }} >
                <PlayersLst isStarted={isStarted}></PlayersLst>
            </div >

            <br />
            <br />
            <br />
            <br />
            <br />
            {playersObserver.amountOfPlayers >= 2 ?
                (<>
                    <HiddenWord ></HiddenWord>
                </>) :
                <>
                    <h3>Add at least 2 players to be able to start the game</h3>
                </>}
            < br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => { setIsStarted(true) }} disabled={isStarted || playersObserver.amountOfPlayers < 2}>Start Game</button>


        </>);
}

);

export default App;