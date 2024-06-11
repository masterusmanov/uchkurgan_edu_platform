import { IsNumber, IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsString()
  readonly course_category?: string;

  @IsString()
  readonly course_name?: string;

  @IsString()
  readonly title?: string;

  @IsString()
  readonly description?: string;

  @IsNumber()
  readonly course_price?: number;
}
