export class CourseStudent {}
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CourseStudentsAttr {
  student_id: string;
  student_name: string;
  selectSex: string;
  birthdate: string;
  identity_document: string;
  address: string;
  social_status: string;
  phone_number: string;
  course_name: string;
  start_date: string;
  duration: string;
  end_date: string;
  course_price: string;
  listener_status: string;
  contract: string;
  teacher: string;
  group: string;
  days: string;
  select_time: string;
  bootcamp: string;
  sertificate_status: string;
  sertificate: string;
  employment: string;
}

@Table({ tableName: 'course_Students' })
export class CourseStudents extends Model<CourseStudents, CourseStudentsAttr> {
  @ApiProperty({ example: '1', description: 'WebName ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John Doe', description: "To'liq ismi-sharifi" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @ApiProperty({ example: '+998901234567', description: 'Telefon raqami' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({ example: 'Check', description: 'Rozilik bildirish' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  agreeToOffer: boolean;
}
