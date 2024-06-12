import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './models/task.model';
import { Course } from '../course/models/course.model';


@Module({
  imports: [SequelizeModule.forFeature([Task, Course])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
