import { CreateGameDto } from './CreateGame.dto';
import { Game } from '../../game.entity';

export type Input = CreateGameDto;

export type Output = Game | null;

export interface ICreateGameUseCase {
  execute(input: Input): Promise<Output>;
}

export const ICreateGameUseCase = Symbol('ICreateGameUseCase');
