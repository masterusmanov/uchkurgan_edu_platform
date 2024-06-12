import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'Birinchi Savol', description: 'Mavzga oid savol' })
  @IsString()
  readonly tasks_one: string;

  @ApiProperty({ example: 'Ikkinchi Savol', description: 'Mavzga oid savol' })
  @IsString()
  readonly tasks_two: string;

  @ApiProperty({ example: 'Uchinchi Savol', description: 'Mavzga oid savol' })
  @IsString()
  readonly tasks_three: string;
}
