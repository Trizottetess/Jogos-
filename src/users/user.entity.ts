import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;

  @Column({ type: DataType.ENUM('user', 'admin'), defaultValue: 'user' })
  declare role: 'user' | 'admin';
}
