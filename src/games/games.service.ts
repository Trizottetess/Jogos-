import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from './game.entity';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel(Game)
    private gameModel: typeof Game,
  ) {}

  findAll(): Promise<Game[]> {
    return this.gameModel.findAll();
  }

  async findOne(id: number): Promise<Game> {
    const game = await this.gameModel.findByPk(id);
    if (!game) throw new NotFoundException(`Jogo com id ${id} não encontrado`);
    return game;
  }

  create(gameData: {
    title: string;
    genre: string;
    releaseYear: number;
  }): Promise<Game> {
    return this.gameModel.create(gameData);
  }

  async update(id: number, newData: Partial<Game>): Promise<Game> {
    const game = await this.findOne(id);
    return game.update(newData);
  }

  async remove(id: number): Promise<string> {
    const game = await this.findOne(id);
    await game.destroy();
    return 'Jogo removido com sucesso!';
  }
}
