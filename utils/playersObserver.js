import { observable, action, computed, makeObservable } from 'mobx';

class PlayersObserver {
    players = [];

    constructor() {
        makeObservable(this, {
            players: observable,
            amountOfPlayers: computed,
            getWinner: computed,
            addPlayer: action,
            updatePlayer: action,
            delPlayer: action,
            restScore: action,
        });
    }

    get amountOfPlayers() {
        return this.players.length;
    }

    get getWinner() {
        let winner = this.players.reduce((prev, curr) =>
            curr.goodGuesses > prev.goodGuesses ? curr : prev, { goodGuesses: 0 })
        if (winner.goodGuesses === 0) {
            return null;
        }
        return winner;
    }

    addPlayer(name) {
        this.players.push({
            name: name,
            goodGuesses: 0,
            letter: null
        });
    }
    updatePlayer(letter, index) {
        this.players[index].goodGuesses++;
        this.players[index].letter = letter;

    }

    delPlayer(index) {
        this.players.splice(index, 1);
    }

    restScore() {
        this.players = this.players.map((p) => ({
            ...p,
            goodGuesses: 0,
            letter: null
        }))
    }
}

const playersObserver = new PlayersObserver();
export default playersObserver;
