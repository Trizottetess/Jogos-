import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @ApiProperty({ description: 'Título do jogo', example: 'God of War' })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({ description: 'Gênero  de jogo', example: 'Ação' })
  @IsString()
  @IsNotEmpty()
  genre!: string;

  @ApiProperty({ description: 'Ano de lançamento do jogo', example: 2018 })
  @IsNumber()
  @IsNotEmpty()
  releaseYear!: number;
}
