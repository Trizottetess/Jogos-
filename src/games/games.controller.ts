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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GamesService } from './games.service';
import { CreateGameDto } from './application/CreateGame/CreateGame.dto';
import { IGetGameByIdUseCase } from './application/GetGameById/GetGameById.useCase';
import { ICreateGameUseCase } from './application/CreateGame/CreateGame.useCase';
import { IDeleteGameUseCase } from './application/DeleteGame/DeleteGame.useCase';
import { IUpdateGameUseCase } from './application/UpdateGame/UpdateGame.useCase';

@ApiTags('Games') //-> agrupando todas as rotas do controller sob o titulo Games no Swagger
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
      execute: (input: { id: number }) => Promise<any>;
    },

    @Inject(IUpdateGameUseCase)
    private readonly updateGameUseCase: {
      execute: (input: any) => Promise<any>;
    },
  ) {}

  @ApiOperation({ summary: 'Retorna todos os jogos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de jogos retornada com sucesso',
  })
  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @ApiOperation({ summary: 'Retorna um jogo pelo id' })
  @ApiResponse({ status: 200, description: 'Jogo encontrado' })
  @ApiResponse({ status: 404, description: 'Jogo não encontrado' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.getGameByIdUseCase.execute({ id: Number(id) });
  }

  @ApiOperation({ summary: 'Cria um novo jogo' })
  @ApiResponse({ status: 201, description: 'Jogo criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados Invalidos' })
  @Post()
  create(@Body() body: CreateGameDto) {
    return this.createGameUseCase.execute(body);
  }

  @ApiOperation({ summary: 'Remove um jogo pelo id' })
  @ApiResponse({ status: 200, description: 'Jogo removido com sucesso' })
  @ApiResponse({ status: 400, description: 'Jogo não encontrado' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteGameUseCase.execute({ id: Number(id) });
  }

  @ApiOperation({ summary: 'Atualiza um jogo pelo id' })
  @ApiResponse({ status: 200, description: 'Jogo atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Jogo não encontrado' })
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.updateGameUseCase.execute({ id: Number(id), ...body });
  }
}
