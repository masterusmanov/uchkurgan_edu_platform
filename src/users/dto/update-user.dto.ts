import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ example: 'first_name', description: 'Foydalanuvchi ismi'})
    @IsNotEmpty()
    @IsString()
    readonly first_name?: string;

    @ApiProperty({ example: 'last_name', description: 'Foydalanuvchi familiyasi'})
    @IsNotEmpty()
    @IsString()
    readonly last_name?: string;

    @ApiProperty({ example: 'userName', description: 'Foydalanuvchi niki'})
    @IsNotEmpty()
    @IsString()
    readonly username?: string;
    
    @ApiProperty({ example: 'telegram_link', description: 'telegram linki'})
    @IsNotEmpty()
    @IsString()
    readonly telegram_link?: string;

    @ApiProperty({ example: 'User@email.uz', description: 'Foydalanuvchi emaili'})
    @IsEmail()
    readonly email?: string;

    @ApiProperty({ example: '+998912345678', description: 'Foydalanuvchi telefon raqami'})
    @IsNotEmpty()
    @IsString()
    readonly phone?: string;

    @ApiProperty({ example: '2023-13-03', description: "Foydalanuvchi tug'ilgan sanasi"})
    @IsNotEmpty()
    @IsString()
    readonly birth_day?: string;
}