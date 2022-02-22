import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAMES } from '../mock-heroes';
// import {} from library  // создать файл
// чтобы добавить в этот массив игру при покупке


@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.less']
})
export class GamesComponent implements OnInit {
    // title = 'Games'

    games = GAMES;
    selectedGame?: Game;

    constructor() { }

    ngOnInit(): void {
    }
    onSelect(game: Game): void {
        this.selectedGame = game;
        // console.log(game)
    }
}