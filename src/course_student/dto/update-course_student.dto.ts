import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString } from 'class-validator';

export class UpdateCourseStudentDto {
  @ApiProperty({
    example: 'Student ID',
    description: 'Talabaning ID raqami',
  })
  @IsString()
  readonly student_id?: string;

  @ApiProperty({
    example: 'Student name',
    description: "O'quvchining F.I.O",
  })
  @IsString()
  readonly student_name?: string;

  @ApiProperty({
    example: 'Student SEX',
    description: "O'quvchining jinsi",
  })
  @IsString()
  readonly selectSex?: string;

  @ApiProperty({
    example: 'Student birthday',
    description: "O'quvchining tug'ilgan sanasi",
  })
  @IsString()
  readonly birthdate?: string;

  @ApiProperty({
    example: 'Student identity document',
    description: "O'quvchining Shasni tasdiqlovchi hujjati",
  })
  @IsString()
  readonly identity_document?: string;

  @ApiProperty({
    example: 'Student address',
    description: "O'quvchining manzili",
  })
  @IsString()
  readonly address?: string;

  @ApiProperty({
    example: 'Student social status',
    description: "O'quvchining ijtimoiy holati",
  })
  @IsString()
  readonly social_status?: string;

  @ApiProperty({
    example: 'Student phone number',
    description: "O'quvchining telefon raqami",
  })
  @IsPhoneNumber()
  readonly phone_number?: string;

  @ApiProperty({
    example: 'Course name',
    description: 'Kurs nomi',
  })
  @IsString()
  readonly course_name?: string;

  @ApiProperty({
    example: 'Course start date',
    description: 'Darsning boshlanish vaqti',
  })
  @IsString()
  readonly start_date?: string;

  @ApiProperty({
    example: 'Duration',
    description: 'Davomiyligi',
  })
  @IsString()
  readonly duration?: string;

  @ApiProperty({
    example: 'Course end date',
    description: 'Darsning tugatish vaqti',
  })
  @IsString()
  readonly end_date?: string;

  @ApiProperty({
    example: 'Course price',
    description: 'Kurs narxi',
  })
  @IsString()
  readonly course_price?: string;

  @ApiProperty({
    example: 'Listener status',
    description: 'Tinglovchi statusi',
  })
  @IsString()
  readonly listener_status?: string;

  @ApiProperty({
    example: 'Contract',
    description: 'Shartnoma',
  })
  @IsString()
  readonly contract?: string;

  @ApiProperty({
    example: 'Teacher',
    description: "O'qituvchi",
  })
  @IsString()
  readonly teacher?: string;

  @ApiProperty({
    example: 'Group',
    description: 'Gruhi',
  })
  @IsString()
  readonly group?: string;

  @ApiProperty({
    example: 'Days',
    description: 'Kuni',
  })
  @IsString()
  readonly days?: string;

  @ApiProperty({
    example: 'course time',
    description: 'Kurs vaqti',
  })
  @IsString()
  readonly select_time?: string;

  @ApiProperty({
    example: 'Bootcamp',
    description: "Qaysi kursga o'tdi",
  })
  @IsString()
  readonly bootcamp?: string;

  @ApiProperty({
    example: 'Certificate status',
    description: 'Sertificate statusi',
  })
  @IsString()
  readonly sertificate_status?: string;

  @ApiProperty({
    example: 'Certificate',
    description: 'Sertifikat',
  })
  @IsString()
  readonly sertificate?: string;

  @ApiProperty({
    example: 'Employment',
    description: "Ish bilan ta'minlash",
  })
  @IsString()
  readonly employment?: string;

  @ApiProperty({
    example: 'Course student Photo',
    description: 'Talabaning surati',
  })
  @IsString()
  readonly course_studentPhoto?: string;
}
