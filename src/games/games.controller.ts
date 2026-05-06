import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.gamesService.create(body);
  }
}
