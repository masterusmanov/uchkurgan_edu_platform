import { Test, TestingModule } from '@nestjs/testing';
import { CourseStudentController } from './course_student.controller';
import { CourseStudentService } from './course_student.service';

describe('CourseStudentController', () => {
  let controller: CourseStudentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseStudentController],
      providers: [CourseStudentService],
    }).compile();

    controller = module.get<CourseStudentController>(CourseStudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
