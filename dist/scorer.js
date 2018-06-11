"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Scorer {
    constructor() {
        this.totalScore = 0;
        this.listOfBatsman = [];
    }
    addBatsman(batsman) {
        this.listOfBatsman.push(batsman);
    }
    changeStrike(currentPlayerOnStrike) {
        let newPlayerOnStrike;
        if (currentPlayerOnStrike === this.listOfBatsman[0]) {
            newPlayerOnStrike = this.listOfBatsman[1];
        }
        else {
            newPlayerOnStrike = this.listOfBatsman[0];
        }
        return newPlayerOnStrike;
    }
    calculateScore(arr) {
        let playerOnStrike = this.listOfBatsman[0];
        arr.forEach((runScored, ballNumber) => {
            if (runScored % 2 === 1) {
                if (playerOnStrike) {
                    playerOnStrike.addRuns(runScored);
                    playerOnStrike = this.changeStrike(playerOnStrike);
                }
            }
            else {
                if (playerOnStrike) {
                    playerOnStrike.addRuns(runScored);
                }
            }
            this.totalScore += runScored;
            if ((ballNumber + 1) % 6 === 0) {
                if (playerOnStrike) {
                    playerOnStrike = this.changeStrike(playerOnStrike);
                }
            }
        });
    }
    printScore() {
        console.log(`Total score: ${this.totalScore}`);
        this.listOfBatsman.forEach(batsman => {
            console.log(`${batsman.playerName} scored ${batsman.numberOfRuns}`);
        });
    }
}
exports.Scorer = Scorer;
