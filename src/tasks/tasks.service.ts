import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './models/task.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepo: typeof Task){}

  async create(createTaskDto: CreateTaskDto) {
    const createOrder = await this.taskRepo.create(createTaskDto)
    return createOrder;
  };

  async findAll() {
    return await this.taskRepo.findAll({include: {all: true}});
  };

  async findOne(id: number) {
    return await this.taskRepo.findOne({where: {id}});
  };

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepo.update(updateTaskDto, {
      where: {id},
      returning: true
    });
  }
  async remove(id: number) {
    return await this.taskRepo.destroy({where: {id}});
  };
}
