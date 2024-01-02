import { observable, action, computed, makeObservable } from 'mobx';

export default class GameObserver {

    constructor() {

        this.isStarted = false;
        this.delay= 300;
        makeObservable(this, {
            isStarted: observable,
            delay: observable,
            updateDelay: action,
            updateIsStarted: action,
        });
    }

    updateIsStarted(isStarted) {
        this.isStarted = isStarted;
    }

    updateDelay(delay) {
        this.delay = delay;
    }

   
};