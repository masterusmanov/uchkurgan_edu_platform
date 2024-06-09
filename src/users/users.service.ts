import {
  Injectable,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './models/user.model';
import { JwtService } from '@nestjs/jwt';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { v4 as uuidv4, v4 } from 'uuid';
import * as otpGenerator from 'otp-generator';
import { PhoneUserDto } from './dto/phone-user.dto';
import { BotService } from '../bot/bot.service';
import { AddMinutesToDate } from '../helpers/addMinutes';
import { Otp } from '../otp/models/otp.model';
import { Op } from 'sequelize';
import { dates, decode, encode } from '../helpers/crypto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { FilesService } from '../files/files.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private readonly userRepo: typeof Users,
    @InjectModel(Otp) private otpRepo: typeof Otp,
    private readonly jwtService: JwtService,
    private readonly botService: BotService,
    private readonly fileService: FilesService,
  ) {}

  async newOTP(phoneUserDto: PhoneUserDto) {
    const phone_number = phoneUserDto.phone;
    const otp = otpGenerator.generate(5, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log(otp);

    const isSend = await this.botService.sendOTP(phone_number, otp);
    if (!isSend) {
      throw new HttpException(
        "Avval Botdan ro'yxatdan o'ting",
        HttpStatus.BAD_REQUEST,
      );
    }
    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 5);
    await this.otpRepo.destroy({
      where: { [Op.and]: [{ check: phone_number }, { verified: false }] },
    });
    const newOtp = await this.otpRepo.create({
      id: v4(),
      otp,
      expiration_time,
      check: phone_number,
    });

    const details = {
      timestamp: now,
      check: phone_number,
      success: true,
      message: 'OTP send to user',
      otp_id: newOtp.id,
    };
    const encoded = await encode(JSON.stringify(details));
    return { status: 'Success', Details: encoded };
  }

  async verifyOtp(verifyOtpDto: VerifyOtpDto) {
    const { verification_key, otp, check } = verifyOtpDto;
    const currentdate = new Date();
    const decoded = await decode(verification_key);
    const obj = JSON.parse(decoded);
    const check_obj = obj.check;
    if (check_obj != check) {
      throw new BadRequestException('OTP bu raqamga yuborilgan');
    }
    const result = await this.otpRepo.findOne({
      where: { id: obj.otp_id },
    });
    if (result != null) {
      if (!result.verified) {
        if (dates.compare(result.expiration_time, currentdate)) {
          if (otp === result.otp) {
            const user = await this.userRepo.findOne({
              where: { phone: check },
            });
            console.log(user);
            if (user) {
              const updatedUser = await this.userRepo.update(
                { is_active: true, is_owner: true },
                { where: { id: user.id }, returning: true },
              );
              await this.otpRepo.update(
                { verified: true },
                { where: { id: obj.otp_id }, returning: true },
              );
              const response = {
                message: 'User update as owner',
                user: updatedUser[1][0],
              };
              return response;
            }
          } else {
            throw new BadRequestException('OTP is not match');
          }
        } else {
          throw new BadRequestException('OTP expired');
        }
      } else {
        throw new BadRequestException('OTP already used');
      }
    } else {
      throw new BadRequestException("Bunday foydalanuvchi yo'q");
    }
  }

  async create(createUserDto: CreateUserDto, user_photo: any) {
    const fileName = await this.fileService.createFile(user_photo);
    const post = await this.userRepo.create({
      ...createUserDto,
      user_photo: fileName,
    });
    return post;
  }

  async findAll() {
    const posts = await this.userRepo.findAll({ include: { all: true } });
    return posts;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(updateUserDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return await this.userRepo.destroy({ where: { id } });
  }
}
