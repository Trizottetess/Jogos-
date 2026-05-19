import { Injectable } from '@nestjs/common';
import { IupdateGameUseCase, Input, Output } from './UpdateGame.useCase';
import { GamesService } from '../../games.service';

@Injectable()
export class UpdateGameUseCase implements IupdateGameUseCase {
  constructor(private readonly gamesService: GamesService) {}

  execute(input: Input): Promise<Output> {
    const { id, ...data } = input;
    return Promise.resolve(this.gamesService.update(id, data));
  }
}
