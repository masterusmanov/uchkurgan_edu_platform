import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseStudentService } from './course_student.service';
import { CreateCourseStudentDto } from './dto/create-course_student.dto';
import { UpdateCourseStudentDto } from './dto/update-course_student.dto';

@Controller('course-student')
export class CourseStudentController {
  constructor(private readonly courseStudentService: CourseStudentService) {}

  @Post()
  create(@Body() createCourseStudentDto: CreateCourseStudentDto) {
    return this.courseStudentService.create(createCourseStudentDto);
  }

  @Get()
  findAll() {
    return this.courseStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseStudentService.findOne(+id);
  }

  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updateCourseStudentDto: UpdateCourseStudentDto,
  ) {
    return this.courseStudentService.update(+id, updateCourseStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseStudentService.remove(+id);
  }
}
