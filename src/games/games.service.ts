import { Injectable, NotFoundException } from '@nestjs/common';
import { Game } from './game.entity';
// import { NotFoundException } from './@nest'

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

  findOne(id: number): Game {
    const game = this.games.find((game) => game.id === id);

    if (!game) throw new NotFoundException(`Jogo com id ${id} não encontrado`);

    return game;
  }
  create(gameData: Omit<Game, 'id'>): Game {
    const newGame: Game = {
      id: this.games.length + 1,
      ...gameData,
    };

    this.games.push(newGame);

    return newGame;
  }

  remove(id: number) {
    const posicao = this.games.findIndex((game) => game.id === id);

    this.games.splice(posicao, 1);
  }

  update(id: number, newData: Partial<Game>) {
    const game = this.findOne(id);

    if (!game) return null;

    Object.assign(game, newData);

    return game;
  }
}
