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
import { CreateGameDto } from './create-games.dto';
import { IGetGameByIdUseCase } from './application/GetGameById/GetGameById.useCase';

@Controller('games')
export class GamesController {
  constructor(
    private readonly gamesService: GamesService,
    @Inject(IGetGameByIdUseCase)
    private readonly getGameByIdUseCase: {
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
    return this.gamesService.create(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.gamesService.update(Number(id), body);
  }
}
