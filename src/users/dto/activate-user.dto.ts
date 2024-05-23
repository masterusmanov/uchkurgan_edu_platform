import { ApiProperty } from "@nestjs/swagger";

export class ActivateUserDto {
  @ApiProperty({ example: 'userId', description: 'Foydalanuvchi id raqami'})
  readonly userId: number;
}
