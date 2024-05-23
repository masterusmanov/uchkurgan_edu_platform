import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString, IsPhoneNumber, IsString } from "class-validator";

export class VerifyOtpDto {
    @ApiProperty({ example: 'check', description: 'Tekshirish'})
    @IsNotEmpty()
    @IsPhoneNumber()
    check: string;

    @ApiProperty({ example: 'verification_key', description: 'Tekshirish kaliti'})
    @IsNotEmpty()
    @IsString()
    verification_key: string;

    @ApiProperty({ example: 'otp', description: 'otp'})
    @IsNumberString()
    otp: string;
}