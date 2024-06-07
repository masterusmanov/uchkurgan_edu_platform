import { Injectable } from '@nestjs/common';
import { CreateCoursePaymentDto } from './dto/create-course_payment.dto';
import { UpdateCoursePaymentDto } from './dto/update-course_payment.dto';

@Injectable()
export class CoursePaymentService {
  create(createCoursePaymentDto: CreateCoursePaymentDto) {
    return 'This action adds a new coursePayment';
  }

  findAll() {
    return `This action returns all coursePayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coursePayment`;
  }

  update(id: number, updateCoursePaymentDto: UpdateCoursePaymentDto) {
    return `This action updates a #${id} coursePayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} coursePayment`;
  }
}
