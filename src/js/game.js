import { Player } from "./managers/gameManager.js";

let canvas = document.getElementById("canvas");
let player = new Player();

console.log(player.getPos());