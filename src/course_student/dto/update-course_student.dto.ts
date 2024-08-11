import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString } from 'class-validator';

export class UpdateCourseStudentDto {
  @ApiProperty({
    example: 'Student phone number',
    description: "O'quvchining telefon raqami",
  })
  @IsPhoneNumber()
  phone_number?: string;

  @ApiProperty({
    example: 'Course price',
    description: 'Kurs narxi',
  })
  @IsString()
  course_price?: string;

  @ApiProperty({
    example: 'Listener status',
    description: 'Tinglovchi statusi',
  })
  @IsString()
  listener_status?: string;

  @ApiProperty({
    example: 'Teacher',
    description: "O'qituvchi",
  })
  @IsString()
  teacher?: string;

  @ApiProperty({
    example: 'Group',
    description: 'Gruhi',
  })
  @IsString()
  group?: string;

  @ApiProperty({
    example: 'Days',
    description: 'Kuni',
  })
  @IsString()
  days?: string;

  @ApiProperty({
    example: 'course time',
    description: 'Kurs vaqti',
  })
  @IsString()
  select_time?: string;

  @ApiProperty({
    example: 'Bootcamp',
    description: "Qaysi kursga o'tdi",
  })
  @IsString()
  bootcamp?: string;

  @ApiProperty({
    example: 'Certificate status',
    description: 'Sertificate statusi',
  })
  @IsString()
  sertificate_status?: string;

  @ApiProperty({
    example: 'Certificate',
    description: 'Sertifikat',
  })
  @IsString()
  sertificate?: string;

  @ApiProperty({
    example: 'Employment',
    description: "Ish bilan ta'minlash",
  })
  @IsString()
  employment?: string;
}
