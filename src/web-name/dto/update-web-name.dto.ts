import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString, IsBoolean } from 'class-validator';

export class UpdateWebNameDto {
  @ApiProperty({
    example: 'John Doe',
    description: "Mijozning to'liq ismi sharifi",
  })
  @IsString()
  readonly full_name?: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'Mijoz telefon raqami',
  })
  @IsPhoneNumber()
  readonly phone?: string;
}
