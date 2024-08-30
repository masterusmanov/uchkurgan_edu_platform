import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString } from 'class-validator';

export class UpdateWebNameDto {
  @ApiProperty({
    example: 'John Doe',
    description: "Mijozning to'liq ismi sharifi",
  })
  @IsString()
  full_name?: string;

  @ApiProperty({
    example: '+998901234567',
    description: 'Mijoz telefon raqami',
  })
  // @IsPhoneNumber()
  phone?: string;
}
