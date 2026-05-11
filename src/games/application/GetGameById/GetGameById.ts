import { Injectable } from '@nestjs/common';
import { GamesService } from '../../games.service';
import { IGetGameByIdUseCase, Input, Output } from './GetGameById.useCase';

@Injectable()
export class GetGameIdUseCase {
  constructor(private readonly gamesService: GamesService) {}

  async execute(input: Input): Promise<Output> {
    return this.gamesService.findOne(input.id);
  }
}
