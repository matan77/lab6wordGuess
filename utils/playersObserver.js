import { observable, action, computed, makeObservable } from 'mobx';

class PlayersObserver {
    players = [];

    constructor() {
        makeObservable(this, {
            players: observable,
            amountOfPlayers: computed,
            addPlayer: action,
            delPlayer: action,
        });
    }

    get amountOfPlayers() {
        return this.players.length;
    }

    addPlayer(name) {
        this.players.push({
            name: name,
            goodGuesses: 0,
            lastLetter: null
        });
    }

    delPlayer(index) {
        this.players.splice(index, 1);
    }
}

const playersObserver = new PlayersObserver();
export default playersObserver;
