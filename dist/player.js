"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    // name: string;
    // constructor(playerName: string) {
    //     this.name = playerName;
    // }
    constructor(name) {
        this.name = name;
    }
    // getName(): string {
    //     return this.name;
    // }
    get playerName() {
        return this.name;
    }
}
exports.Player = Player;
