import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsStrongPassword,
  MinLength,
  IsPhoneNumber,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'first_name', description: 'Foydalanuvchi ismi' })
  @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @ApiProperty({
    example: 'last_name',
    description: 'Foydalanuvchi familiyasi',
  })
  @IsNotEmpty()
  @IsString()
  readonly last_name: string;

  @ApiProperty({
    example: '912345678',
    description: 'Foydalanuvchi telefon raqami',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  readonly phone: string;

  @ApiProperty({ example: 'P@$$w00rd', description: 'Foydalanuvchi paroli' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @IsStrongPassword()
  readonly password: string;
}
