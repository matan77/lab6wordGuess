import React from 'react';
import wordObserver from "../utils/wordObserver";
import { observer } from "mobx-react-lite";

const HiddenWord = ({ }) => {

    return (
        <div>
            {`Guess the word: ${wordObserver.getWord}`}
        </div>
    );
};
export default HiddenWord;