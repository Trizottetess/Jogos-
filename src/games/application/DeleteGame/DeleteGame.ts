import { Injectable } from '@nestjs/common';
import { IDeleteGameUseCase, Input, Output } from './DeleteGame.useCase';
import { GamesService } from '../../games.service';

@Injectable()
export class DeleteGameUseCase implements IDeleteGameUseCase {
  constructor(private readonly gamesService: GamesService) {}

  execute(input: Input): Promise<Output> {
    return Promise.resolve(this.gamesService.remove(input.id));
  }
}
