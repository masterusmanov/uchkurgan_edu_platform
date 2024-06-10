import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({
    example: 'Household appliances',
    description: 'Product category',
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
  @IsString()
  readonly course_price: string;
}
