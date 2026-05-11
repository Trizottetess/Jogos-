import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { GetGameIdUseCase } from './application/GetGameById/GetGameById';
import { IGetGameByIdUseCase } from './application/GetGameById/GetGameById.useCase';
import { CreateGameUseCase } from './application/CreateGame/CreateGame';
import { ICreateGameUseCase } from './application/CreateGame/CreateGame.useCase';

@Module({
  controllers: [GamesController],
  providers: [
    GamesService,
    {
      useClass: GetGameIdUseCase,
      provide: IGetGameByIdUseCase,
    },
    {
      useClass: CreateGameUseCase,
      provide: IGetCreateGameUseCase,
    },
  ],
})
export class GamesModule {}
