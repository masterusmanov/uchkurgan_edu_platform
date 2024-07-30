import { Module } from '@nestjs/common';
import { CourseStudentService } from './course_student.service';
import { CourseStudentController } from './course_student.controller';

@Module({
  controllers: [CourseStudentController],
  providers: [CourseStudentService],
})
export class CourseStudentModule {}
