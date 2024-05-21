import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsPhoneNumber, } from 'class-validator';

export class CreateUserDto {
  
  @ApiProperty({ example: 'userName', description: 'User full name' })
  @IsNotEmpty()
  @IsString()
  readonly fullname: string;

  @ApiProperty({ example: 'customer@email.uz', description: 'Customer email' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: '912345678', description: 'Customer phone number' })
  @IsPhoneNumber()
  readonly phone_number: string;

  @ApiProperty({ example: 'P@$$w00rd', description: 'Customer password' })
  @IsStrongPassword()
  @MinLength(8)
  readonly password: string;

  @ApiProperty({ example: 'P@$$w00rd', description: 'Customer repeat password'})
  @IsStrongPassword()
  @MinLength(8)
  readonly confirm_password: string;
}
