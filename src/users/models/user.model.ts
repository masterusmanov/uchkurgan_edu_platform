import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
// import { Course } from 'src/course/models/course.model';


interface UsersCreationAttrs {
  first_name: string;
  last_name: string;
  user_photo: string;
  phone: string;
  password: string;
  is_owner: boolean;
  is_active: boolean;
}

@Table({ tableName: 'users' })
export class Users extends Model<Users, UsersCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  user_photo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  is_owner: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  is_active: boolean;

  // @HasMany(() => Course)
  // course: Course;
}
