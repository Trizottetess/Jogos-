import { IsNumber } from 'class-validator';

export class DeleteGameDto {
  @IsNumber()
  id!: number;
}
