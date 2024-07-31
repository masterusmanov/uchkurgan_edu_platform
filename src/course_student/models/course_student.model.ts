import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CourseStudentAttr {
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
  course_studentPhoto: string;
}

@Table({ tableName: 'course_Students' })
export class CourseStudent extends Model<CourseStudent, CourseStudentAttr> {
  @ApiProperty({ example: '1', description: 'No_' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1234', description: "O'quvchining ID raqami" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  student_id: string;

  @ApiProperty({ example: 'Student name', description: 'O`quvchinig F.I.O' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  student_name: string;

  @ApiProperty({ example: 'Sex', description: 'Jinsi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  selectSex: string;

  @ApiProperty({ example: 'Birthdate', description: 'Tug`ilgan sanasi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  birthdate: string;

  @ApiProperty({
    example: 'Identity document',
    description: 'Shaxsni tasdiqlovchi hujjat',
  })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  identity_document: string;

  @ApiProperty({ example: 'Address', description: 'Manzili' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  address: string;

  @ApiProperty({ example: 'Social status', description: 'Ijtimoiy statusi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  social_status: string;

  @ApiProperty({ example: 'Phone number', description: 'Telefon raqami' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  phone_number: string;

  @ApiProperty({ example: 'Course name', description: 'Kurs nomi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  course_name: string;

  @ApiProperty({ example: 'Start date', description: 'Boshlanish sanasi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  start_date: string;

  @ApiProperty({ example: 'Duration', description: 'Davomiyligi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  duration: string;

  @ApiProperty({ example: 'End date', description: 'Tusgatish sanasi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  end_date: string;

  @ApiProperty({ example: 'Course price', description: 'Kurs narxi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  course_price: string;

  @ApiProperty({
    example: 'Listener_status',
    description: 'Tinglovchi statusi',
  })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  listener_status: string;

  @ApiProperty({ example: 'Contract', description: 'Shartnoma' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  contract: string;

  @ApiProperty({ example: 'Teacher', description: 'O`qituvchi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  teacher: string;

  @ApiProperty({ example: 'Group', description: 'Guruhi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  group: string;

  @ApiProperty({ example: 'Days', description: 'Kunlari' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  days: string;

  @ApiProperty({ example: 'Select time', description: 'Kurs boshlanish soati' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  select_time: string;

  @ApiProperty({ example: 'Bootcamp', description: 'Qaysi bosqichga o`tdi' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  bootcamp: string;

  @ApiProperty({
    example: 'Certificate status',
    description: 'Sertifikat statusi',
  })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  sertificate_status: string;

  @ApiProperty({ example: 'Certificate', description: 'Sertifikat' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  sertificate: string;

  @ApiProperty({ example: 'Employment', description: 'Ish bilan ta`minlash' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  employment: string;

  @ApiProperty({ example: 'Course student photo', description: 'O`quvchinig surati' })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  course_studentPhoto: string;
}
