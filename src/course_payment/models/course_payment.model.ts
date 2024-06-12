import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Course } from 'src/course/models/course.model';
import { Users } from 'src/users/models/user.model';

interface CoursePaymentCreateAttr {
  user_id: number;
  course_id: number;
  payment: number;
  payment_date: string;
}

@Table({ tableName: 'courses_payment' })
export class CoursePayment extends Model<
  CoursePayment,
  CoursePaymentCreateAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;

  @ForeignKey(() => Course)
  @Column({
    type: DataType.INTEGER,
  })
  course_id: number;

  @Column({
    type: DataType.INTEGER,
  })
  payment: number;

  @Column({
    type: DataType.STRING,
  })
  payment_date: string;

  @BelongsTo(() => Users)
  user: Users;

  @BelongsTo(() => Course)
  course: Course;
}
