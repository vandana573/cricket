"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scorer_1 = require("./../scorer");
const batsman_1 = require("../batsman");
describe('Testing scorer class', () => {
    it('should be able to create a scorer object', () => {
        const scorer = new scorer_1.Scorer();
        expect(scorer).toBeDefined();
    });
    it('should be able to add batsman to list', () => {
        const scorer = new scorer_1.Scorer();
        expect(scorer.listOfBatsman.length).toEqual(0);
        const batsman = new batsman_1.Batsman('Sehwag');
        scorer.addBatsman(batsman);
        expect(scorer.listOfBatsman.length).toEqual(1);
        expect(scorer.listOfBatsman[0]).toEqual(batsman);
    });
    it('should be able to change strike', () => {
        const scorer = new scorer_1.Scorer();
        const batsman1 = new batsman_1.Batsman('Gambhir');
        const batsman2 = new batsman_1.Batsman('Dhoni');
        scorer.addBatsman(batsman1);
        scorer.addBatsman(batsman2);
        const newPlayerOnStrike = scorer.changeStrike(batsman1);
        expect(newPlayerOnStrike).toEqual(batsman2);
    });
    it('should call change strike during calculation of score', () => {
        const scorer = new scorer_1.Scorer();
        const batsman1 = new batsman_1.Batsman('Raina');
        const batsman2 = new batsman_1.Batsman('Jadeja');
        scorer.addBatsman(batsman1);
        scorer.addBatsman(batsman2);
        spyOn(scorer, "changeStrike");
        scorer.calculateScore([2, 3, 4, 5, 5, 6, 0, 1]);
        expect(scorer.changeStrike).toHaveBeenCalled();
    });
});
