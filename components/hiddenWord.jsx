import React, { useState } from 'react';

export default function HiddenWord({ word }) {
    const [revealedLetters, setRevealedLetters] = useState(Array(word.length).fill(false));

    const revealLetter = (index) => {
        const updatedRevealedLetters = [...revealedLetters];
        updatedRevealedLetters[index] = true;
        setRevealedLetters(updatedRevealedLetters);
    };

    return (
        <div>
            {`Guess the word: ${word.split('').map((letter, index) => revealedLetters[index] ? letter : '_ ').join("")}`}
        </div>
    );
};
