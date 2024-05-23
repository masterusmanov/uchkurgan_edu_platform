import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class FindUserDto {
    @ApiProperty({ example: 'search', description: 'Qidiruv'})
    @IsString()
    search: string
}