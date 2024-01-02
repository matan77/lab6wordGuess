import React from 'react';
import { observer } from 'mobx-react-lite';
const HiddenWord = observer(({ wordObserver }) => {

    return (
        <>
            <div style={{ fontSize: 'x-large' }}>
                {`Guess the word: ${wordObserver.getWord}`}

            </div>
            <br />
            <div style={{
                margin: 'auto',
                border: '1px solid #000',
                padding: '3px', width: 'fit-content', fontSize: 'large'
            }}>
                <h3>Incorrect Letters:</h3>
                {wordObserver.incorrectGuesses.join(',')}
            </div >
        </>
    );
});
export default HiddenWord;