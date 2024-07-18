import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @ApiProperty({
    example: 'Household appliances',
    description: 'Course category',
  })
  @IsString()
  readonly course_category: string;

  @ApiProperty({ example: 'Refrigerator', description: 'Description' })
  @IsString()
  readonly course_name: string;

  @ApiProperty({ example: 'Refrigerator', description: 'Description' })
  @IsString()
  readonly title: string;

  @ApiProperty({ example: 'Refrigerator', description: 'Description' })
  @IsString()
  readonly description: string;

  @ApiProperty({ example: 'Refrigerator', description: 'Description' })
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  readonly course_price: number;
}
