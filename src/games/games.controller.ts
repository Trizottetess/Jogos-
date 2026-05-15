import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
  Inject,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './application/CreateGame/CreateGame.dto';
import { IGetGameByIdUseCase } from './application/GetGameById/GetGameById.useCase';
import { ICreateGameUseCase } from './application/CreateGame/CreateGame.useCase';
import { IDeleteGameUseCase } from './application/DeleteGame/DeleteGame.useCase';
import { IUpdateGameUseCase } from './application/UpdateGame/UpdateGame.useCase';

@Controller('games')
export class GamesController {
  constructor(
    private readonly gamesService: GamesService,

    @Inject(IGetGameByIdUseCase)
    private readonly getGameByIdUseCase: {
      execute: (input: any) => Promise<any>;
    },

    @Inject(ICreateGameUseCase)
    private readonly createGameUseCase: {
      execute: (input: any) => Promise<any>;
    },
    @Inject(IDeleteGameUseCase)
    private readonly deleteGameUseCase: {
      execute: (input: number) => Promise<any>;
    },

    @Inject(IUpdateGameUseCase)
    private readonly updateGameUseCase: {
      execute: (input: any) => Promise<any>;
    },
  ) {}

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getGameByIdUseCase.execute({ id: Number(id) });
  }

  @Post()
  create(@Body() body: CreateGameDto) {
    return this.createGameUseCase.execute(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteGameUseCase.execute(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateGameUseCase.execute({ id: Number(id), ...body });
  }
}
