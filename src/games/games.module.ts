import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { GetGameIdUseCase } from './application/GetGameById/GetGameById';
import { IGetGameByIdUseCase } from './application/GetGameById/GetGameById.useCase';
import { CreateGamesUseCase } from './application/CreateGame/CreateGame';
import { ICreateGameUseCase } from './application/CreateGame/CreateGame.useCase';
import { DeleteGameUseCase } from './application/DeleteGame/DeleteGame';
import { IDeleteGameUseCase } from './application/DeleteGame/DeleteGame.useCase';
import { UpdateGameUseCase } from './application/UpdateGame/UpdateGame';
import { IUpdateGameUseCase } from './application/UpdateGame/UpdateGame.useCase';

@Module({
  controllers: [GamesController],
  providers: [
    GamesService,
    {
      useClass: GetGameIdUseCase,
      provide: IGetGameByIdUseCase,
    },
    {
      useClass: CreateGamesUseCase,
      provide: ICreateGameUseCase,
    },
    {
      useClass: DeleteGameUseCase,
      provide: IDeleteGameUseCase,
    },
    {
      useClass: UpdateGameUseCase,
      provide: IUpdateGameUseCase,
    },
  ],
})
export class GamesModule {}
