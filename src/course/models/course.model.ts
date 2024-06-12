import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table, 
  HasMany,
  BelongsTo
} from 'sequelize-typescript';
import { CoursePayment } from 'src/course_payment/models/course_payment.model';
import { Task } from '../../tasks/models/task.model';
import { Users } from '../../users/models/user.model';

interface CourseCreateAttr {
  course_category: string;
  course_name: string;
  course_video: string;
  title: string;
  description: string;
  course_price: number;
  payment_id: number;
  user_id: number;
}

@Table({ tableName: 'courses' })
export class Course extends Model<Course, CourseCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  course_category: string;

  @Column({
    type: DataType.TEXT,
  })
  course_name: string;

  @Column({
    type: DataType.STRING,
  })
  course_video: string;

  @Column({
    type: DataType.STRING,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
  })
  course_price: number;

  @ForeignKey(() => CoursePayment)
  @Column({
    type: DataType.INTEGER,
  })
  payment_id: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;

  @BelongsTo(() => Users)
  users: Users;

  @HasMany(() => CoursePayment)
  coursepayment: CoursePayment[];

  @HasMany(() => Task)
  task: Task[];
}
