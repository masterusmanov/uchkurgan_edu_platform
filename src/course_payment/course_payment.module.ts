import { Module } from '@nestjs/common';
import { CoursePaymentService } from './course_payment.service';
import { CoursePaymentController } from './course_payment.controller';
import { CoursePayment } from './models/course_payment.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from '../users/models/user.model';
import { Course } from '../course/models/course.model';

@Module({
  imports: [SequelizeModule.forFeature([CoursePayment, Users, Course])],
  controllers: [CoursePaymentController],
  providers: [CoursePaymentService],
})
export class CoursePaymentModule {}
