import { IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsString()
  readonly course_category?: string;

  @IsString()
  readonly course_name?: string;

  @IsString()
  readonly title?: string;

  @IsString()
  readonly description?: string;

  @IsString()
  readonly course_price?: string;
}
