import { observable, action, computed, makeObservable } from 'mobx';
import { getRandomWord } from "../data/words";

class WordObserver {
    constructor() {
        this.refreshWord();
        makeObservable(this, {
            word: observable,
            revealedLetters: observable,
            getWord: computed,
            isRevealed: computed,
            refreshWord: action,
            addGuess: action
        });
    }
    get getWord() {
        return this.word.split('').map((letter, index) => this.revealedLetters[index] ? letter : '_ ').join("");
    }
    get isRevealed() {
        return this.revealedLetters.every((curr) => curr);
    }

    refreshWord() {
        this.word = getRandomWord();
        this.revealedLetters = Array(this.word.length).fill(false);
        this.incorrectGuesses = [];
    }

    addGuess(guessedLetter) {
        if (this.incorrectGuesses.includes(guessedLetter))
        {
            return false;
        }
        let isGuess = false;
        this.word.split('').forEach((letter, index) => {
            if (letter === guessedLetter) {
                this.revealedLetters[index] = true;
                isGuess = true;
            }
        });
        if (!isGuess) {
            this.incorrectGuesses.push(guessedLetter);
        }
        return isGuess;
    }
}

const wordObserver = new WordObserver();
export default wordObserver;
