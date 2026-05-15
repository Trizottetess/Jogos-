import { UpdateGameDto } from './UpdateGame.dto';
import { Game } from '../../game.entity';

export type Input = UpdateGameDto & { id: number };
export type Output = Game | null;

export interface IupdateGameUseCase {
  execute(input: Input): Promise<Output>;
}

export const IUpdateGameUseCase = Symbol('IUpdateGameUseCase');
