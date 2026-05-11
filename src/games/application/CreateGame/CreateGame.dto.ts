import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  genre!: string;

  @IsNumber()
  @IsNotEmpty()
  releaseYear!: number;
}
