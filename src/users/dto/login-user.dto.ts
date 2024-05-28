import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsPhoneNumber } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    example: '912345678',
    description: 'Foydalanuvchi telefon raqami',
  })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({
    example: 'email@mail.P@$$ww00rd',
    description: 'Foydalanuvchi paroli',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
