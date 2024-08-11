import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsStrongPassword, MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'first_name', description: 'Foydalanuvchi ismi' })
  @IsString()
  first_name?: string;

  @ApiProperty({
    example: 'last_name',
    description: 'Foydalanuvchi familiyasi',
  })
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'P@$$w00rd', description: 'Foydalanuvchi paroli' })
  @IsString()
  @MinLength(6)
  @IsStrongPassword()
  password?: string;
}
