import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateGameDto {
  @IsNumber()
  id!: number;

  @IsString()
  @IsOptional()
  genre?: string;

  @IsString()
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsOptional()
  releaseYear?: number;
}
