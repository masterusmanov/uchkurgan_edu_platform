import {
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
    HasMany,
  } from 'sequelize-typescript';
  import { Course } from 'src/course/models/course.model';
  import { Users } from 'src/users/models/user.model';
  
  interface CoursePaymentCreateAttr {
    user_id: string;
    course_id: string;
    payment: string;
  }
  
  @Table({ tableName: 'task' })
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
      type: DataType.BIGINT,
    })
    payment: number;
  
    @HasMany(() => Users)
    Users: Users;
  
    @HasMany(() => Course)
    course: Course;
  }
  