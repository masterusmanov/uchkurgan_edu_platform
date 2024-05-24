import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { PhoneUserDto } from './dto/phone-user.dto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { FindUserDto } from './dto/find-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/otp')
  newOTP(@Body() phoneUserDto: PhoneUserDto) {
    return this.usersService.newOTP(phoneUserDto);
  }

  @Post('/verify')
  verifyOtp(@Body() verfyOtpDto: VerifyOtpDto) {
    return this.usersService.verifyOtp(verfyOtpDto);
  }

  @Post('find')
  findAll(@Body() findUserDto: FindUserDto) {
    return this.usersService.findAll(findUserDto);
  }
}
