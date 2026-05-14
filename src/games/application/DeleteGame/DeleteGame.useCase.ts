import { DeleteGameDto } from './DeleteGame.dto';

export type Input = DeleteGameDto;

export type Output = string;

export interface IDeleteGameUseCase {
  execute(input: Input): Promise<Output>;
}

export const IDeleteGameUseCase = Symbol('IDeleteGameUseCase');
