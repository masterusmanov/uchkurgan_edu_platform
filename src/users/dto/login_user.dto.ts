import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail } from "class-validator";

export class LoginUserDto{

    @ApiProperty({ example: 'customer@email.uz', description: 'Customer email'})
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'P@$$w00rd', description: 'Customer password'})
    @IsString()
    password: string;


}