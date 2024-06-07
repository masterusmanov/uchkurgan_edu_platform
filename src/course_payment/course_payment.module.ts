import { Module } from '@nestjs/common';
import { CoursePaymentService } from './course_payment.service';
import { CoursePaymentController } from './course_payment.controller';

@Module({
  controllers: [CoursePaymentController],
  providers: [CoursePaymentService],
})
export class CoursePaymentModule {}
