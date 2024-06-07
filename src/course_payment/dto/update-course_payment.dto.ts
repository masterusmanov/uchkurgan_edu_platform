import { PartialType } from '@nestjs/swagger';
import { CreateCoursePaymentDto } from './create-course_payment.dto';

export class UpdateCoursePaymentDto extends PartialType(CreateCoursePaymentDto) {}
