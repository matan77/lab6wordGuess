import { observable, action, computed, makeObservable } from 'mobx';
import { getRandomWord, getRandomLetter } from "../data/words";

class WordObserver {
    constructor() {
        this.word = getRandomWord();
        this.revealedLetters = Array(this.word.length).fill(false);
        this.incorrectGuesses = [];
        makeObservable(this, {
            word: observable,
            revealedLetters: observable,
            getWord: computed,
            refreshWord: action,
            addGuess: action
        });
    }
    get getWord() {
        return this.word.split('').map((letter, index) => this.revealedLetters[index] ? letter : '_ ').join("");
    }

    refreshWord() {
        this.word = getRandomWord();
        this.revealedLetters = Array(word.length).fill(false);
    }

    addGuess(guessedLetter) {
        let isGuess = false;
        this.word.split('').forEach((letter, index) => {
            if (letter === guessedLetter) {
                this.revealedLetters[index] = true;
                isGuess = true;
            }
        });
        return isGuess;
    }
}

const wordObserver = new WordObserver();
export default wordObserver;
