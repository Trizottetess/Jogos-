import { IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGameDto {
  @ApiProperty({
    description: 'Título do jogo',
    example: 'God of War Ragnarök',
  })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ description: 'Gênero do jogo', example: 'Ação' })
  @IsString()
  @IsOptional()
  genre?: string;

  @ApiProperty({ description: 'Ano de lançamento do jogo', example: 2022 })
  @IsNumber()
  @IsOptional()
  releaseYear?: number;
}
