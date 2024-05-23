import { Controller, Get, Post, Body, Param, Res, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Users } from './models/user.model';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';
import { PhoneUserDto } from './dto/phone-user.dto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { FindUserDto } from './dto/find-user.dto'
import { JwtAuthGuard } from '../guards/jwtusers.guards';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'register User'})
  @ApiResponse({ status: 201, type: Users})
  @Post('signup')
  registration(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response){
    return this.usersService.registration(createUserDto, res);
  };

  @ApiOperation({ summary: 'login User'})
  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 200, type: Users})
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  login(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response
  ){
    return this.usersService.login(loginUserDto, res);
  };

  @ApiOperation({summary: 'logout User'})
  @UseGuards(JwtAuthGuard)
  @ApiResponse({status: 200, type: Users})
  @HttpCode(HttpStatus.OK)
  @Post("signout")
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({passthrough:true}) res:Response
  ){
    console.log(refreshToken);
    
    return this.usersService.logout(refreshToken, res)
  };

  // @UseGuards(JwtAuthGuard)
  @ApiOperation({summary: 'activate user'})
  @ApiResponse({status: 200, type: [Users]})
  @Get('activate/:link')
  activate(@Param('link') link: string){
    return this.usersService.activate(link);
  };

  @UseGuards(JwtAuthGuard)
  @Post(':id/refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({passthrough: true}) res: Response
  ){
    return this.usersService.refreshToken(+id, refreshToken, res);
  };
  
  @Post('/otp')
  newOTP(@Body() phoneUserDto: PhoneUserDto) {
    return this.usersService.newOTP(phoneUserDto);
  };

  @Post('/verify')
  verifyOtp(@Body() verfyOtpDto: VerifyOtpDto) {
    return this.usersService.verifyOtp(verfyOtpDto);
  };

  @Post('find')
  findAll(@Body() findUserDto: FindUserDto) {
    return this.usersService.findAll(findUserDto);
  };
}