import { Module } from '@nestjs/common';
import { CourseStudentService } from './course_student.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseStudentController } from './course_student.controller';
import { CourseStudent } from './models/course_student.model';

@Module({
  imports: [SequelizeModule.forFeature([CourseStudent])],
  controllers: [CourseStudentController],
  providers: [CourseStudentService],
})
export class CourseStudentModule {}