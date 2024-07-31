import { Injectable } from '@nestjs/common';
import { CreateCourseStudentDto } from './dto/create-course_student.dto';
import { UpdateCourseStudentDto } from './dto/update-course_student.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CourseStudent } from './models/course_student.model';

@Injectable()
export class CourseStudentService {
  constructor(
    @InjectModel(CourseStudent) private courseStudentRepo: typeof CourseStudent,
  ) {}

  async create(createCourseStudentDto: CreateCourseStudentDto) {
    const courseStudentCreate = await this.courseStudentRepo.create(
      createCourseStudentDto,
    );
    return courseStudentCreate;
  }

  async findAll() {
    return await this.courseStudentRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return await this.courseStudentRepo.findOne({ where: { id } });
  }

  async update(id: number, updateCourseStudentDto: UpdateCourseStudentDto) {
    return await this.courseStudentRepo.update(updateCourseStudentDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return await this.courseStudentRepo.destroy({ where: { id } });
  }
}
