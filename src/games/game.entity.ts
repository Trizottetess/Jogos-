import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'games' })
export class Game extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare genre: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare releaseYear: number;
}
