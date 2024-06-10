import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './models/course.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course) private courseRepo: typeof Course) {}

  async create(createCourseDto: CreateCourseDto) {
    const neworder = await this.courseRepo.create(createCourseDto);
    return neworder;
  }

  async findAll() {
    const allorders = await this.courseRepo.findAll({ include: { all: true } });
    return allorders;
  }

  async findOne(id: number) {
    const oneorder = await this.courseRepo.findOne({ where: { id } });
    return oneorder;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const upcourse = await this.courseRepo.update(updateCourseDto, {
      where: { id },
      returning: true,
    });
    return upcourse;
  }

  async remove(id: number) {
    const removecourse = this.courseRepo.destroy({ where: { id } });
    if (!removecourse) {
      throw new HttpException('Kurs mavjud emas', HttpStatus.NOT_FOUND);
    }
    return { message: "Kurs o'chirildi" };
  }
}
