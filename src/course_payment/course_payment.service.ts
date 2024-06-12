import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCoursePaymentDto } from './dto/create-course_payment.dto';
import { UpdateCoursePaymentDto } from './dto/update-course_payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CoursePayment } from './models/course_payment.model';

@Injectable()
export class CoursePaymentService {
  constructor(
    @InjectModel(CoursePayment) private coursePaymentRepo: typeof CoursePayment,
  ) {}

  async create(createcoursePaymentDto: CreateCoursePaymentDto) {
    const newcourse_payment = await this.coursePaymentRepo.create(
      createcoursePaymentDto,
    );
    return newcourse_payment;
  }

  async findAll() {
    const allcourse_payment = await this.coursePaymentRepo.findAll({
      include: { all: true },
    });
    return allcourse_payment;
  }

  async findOne(id: number) {
    const onecourse_payment = await this.coursePaymentRepo.findOne({
      where: { id },
    });
    return onecourse_payment;
  }

  async update(id: number, updateCoursePaymentDto: UpdateCoursePaymentDto) {
    const upcourse_payment = await this.coursePaymentRepo.update(
      updateCoursePaymentDto,
      {
        where: { id },
        returning: true,
      },
    );
    return upcourse_payment;
  }

  async remove(id: number) {
    const removecourse_payment = this.coursePaymentRepo.destroy({
      where: { id },
    });
    if (!removecourse_payment) {
      throw new HttpException("Kurs to'lovi mavjud emas", HttpStatus.NOT_FOUND);
    }
    return { message: "Order o'chirildi" };
  }
}
