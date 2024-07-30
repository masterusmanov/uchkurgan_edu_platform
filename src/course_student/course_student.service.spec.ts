import { Test, TestingModule } from '@nestjs/testing';
import { CourseStudentService } from './course_student.service';

describe('CourseStudentService', () => {
  let service: CourseStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseStudentService],
    }).compile();

    service = module.get<CourseStudentService>(CourseStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
