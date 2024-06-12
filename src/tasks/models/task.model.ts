import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Course } from 'src/course/models/course.model';

interface TaskCreateAttr {
  course_id: number;
  tasks_one: string;
  tasks_two: string;
  tasks_three: string;
}

@Table({ tableName: 'task' })
export class Task extends Model<Task, TaskCreateAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Course)
  @Column({
    type: DataType.INTEGER,
  })
  course_id: number;

  @Column({
    type: DataType.STRING,
  })
  tasks_one: string;

  @Column({
    type: DataType.STRING,
  })
  tasks_two: string;

  @Column({
    type: DataType.STRING,
  })
  tasks_three: string;

  @BelongsTo(() => Course)
  course: Course;
}
