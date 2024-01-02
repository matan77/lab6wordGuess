import { observable, action, computed, makeObservable, autorun} from 'mobx';
import { getRandomWord } from "../data/words";

export default class WordObserver {
    constructor() {
        this.word = "";
        this.revealedLetters = [];
        this.incorrectGuesses = [];
        this.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

        makeObservable(this, {
            word: observable,
            revealedLetters: observable,
            incorrectGuesses: observable,
            letters: observable,
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
        this.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    }

    getGuess() {
        return this.letters[Math.floor(Math.random() * (this.letters.length))];
    }

    addGuess(guessedLetter) {
        let isGuess = false;
        this.word.split('').forEach((letter, index) => {
            if (letter === guessedLetter) {
                this.revealedLetters[index] = true;
                isGuess = true;
            }
        });
        if (!isGuess && this.letters.length > 0) {
            this.incorrectGuesses.push(guessedLetter);
        }
        this.letters.splice(this.letters.indexOf(guessedLetter),1);
        return isGuess;
    }
}
