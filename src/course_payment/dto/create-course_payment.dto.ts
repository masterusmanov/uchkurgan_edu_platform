import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateCoursePaymentDto {
  @ApiProperty({
    example: '500$',
    description: "To'lov miqdori",
  })
  @IsNumber()
  readonly payment: number;
}
