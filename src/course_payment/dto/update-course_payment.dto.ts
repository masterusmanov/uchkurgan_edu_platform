import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateCoursePaymentDto {
  @ApiProperty({ example: '500$', description: "To'lov miqdori" })
  @IsNumber()
  readonly payment?: number;
}
