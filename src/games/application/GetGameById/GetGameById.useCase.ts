import { GetGameByIdDto } from './GetGameById.dto';
import { Game } from '../../game.entity';

export type Input = GetGameByIdDto;
export type Output = Game | null;

export interface IgetGameByIdUseCase {
  execute(input: Input): Promise<Output>;
}

export const IGetGameByIdUseCase = Symbol('IGetGameByIdUseCase');
