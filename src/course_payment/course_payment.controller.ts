import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CoursePaymentService } from './course_payment.service';
import { CreateCoursePaymentDto } from './dto/create-course_payment.dto';
import { UpdateCoursePaymentDto } from './dto/update-course_payment.dto';

@Controller('course-payment')
export class CoursePaymentController {
  constructor(private readonly coursePaymentService: CoursePaymentService) {}

  @Post()
  create(@Body() createCoursePaymentDto: CreateCoursePaymentDto) {
    return this.coursePaymentService.create(createCoursePaymentDto);
  }

  @Get()
  findAll() {
    return this.coursePaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursePaymentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCoursePaymentDto: UpdateCoursePaymentDto,
  ) {
    return this.coursePaymentService.update(+id, updateCoursePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursePaymentService.remove(+id);
  }
}
