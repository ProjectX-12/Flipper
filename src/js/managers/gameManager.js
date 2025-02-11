import { Entity } from '../entities/entity.js';
import { Position } from '../components/position.js';
import { Gravity } from '../components/gravity.js';

export class Player{
    constructor(){
        this.player = new Entity();
        this.player.addComponent(new Position(10,10));
        this.player.addComponent(new Gravity(0.5));
    }

    getPos(){
        return this.player.returnComponent("Position");
    }
}

