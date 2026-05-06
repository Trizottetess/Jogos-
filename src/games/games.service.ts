import { Injectable } from '@nestjs/common';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  private games: Game[] = [
    { id: 1, title: 'The Last Of Us', genre: 'Aventura', releaseYear: 2013 },
    {
      id: 2,
      title: 'Resident Evil Requiem',
      genre: 'Terror',
      releaseYear: 2026,
    },
    {
      id: 3,
      title: 'Call Of Duty Advanced Warfare',
      genre: 'Aventura',
      releaseYear: 2015,
    },
  ];

  findAll(): Game[] {
    return this.games;
  }

  findOne(id: number): Game | undefined {
    return this.games.find((Game) => Game.id === Number(id));
  }

  create(gameData: Omit<Game, 'id'>): Game {
    const newGame: Game = {
      id: this.games.length + 1,
      ...gameData,
    };

    this.games.push(newGame);

    return newGame;
  }
}
