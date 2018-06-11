"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const batsman_1 = require("./../batsman");
describe('Testing Batsman class', () => {
    it('should be able to create a Batsman class', () => {
        const batsman = new batsman_1.Batsman('Sachin');
        expect(batsman).toBeDefined();
    });
    it('should be able to return number of runs', () => {
        const batsman = new batsman_1.Batsman('Dravid');
        expect(batsman.numberOfRuns).toEqual(0);
    });
    it('should be able to return number of balls batted', () => {
        const batsman = new batsman_1.Batsman('Ganguly');
        expect(batsman.numberOfBallsBatted).toEqual(0);
    });
    it('should be able to add Runs to the batsman', () => {
        const batsman = new batsman_1.Batsman('Laxman');
        batsman.addRuns(5);
        expect(batsman.numberOfRuns).toEqual(5);
    });
});
