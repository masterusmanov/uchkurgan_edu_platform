import { Injectable } from '@nestjs/common';
import { CreateWebNameDto } from './dto/create-web-name.dto';
import { UpdateWebNameDto } from './dto/update-web-name.dto';
import { InjectModel } from '@nestjs/sequelize';
import { WebName } from './models/web-name.model';

@Injectable()
export class WebNameService {
  constructor(@InjectModel(WebName) private webNameRepo: typeof WebName) {}

  async create(createWebNameDto: CreateWebNameDto) {
    const webnameCreate = await this.webNameRepo.create(createWebNameDto);
    return webnameCreate;
  }

  async findAll() {
    return await this.webNameRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return await this.webNameRepo.findOne({ where: { id } });
  }

  async update(id: number, updateWebNameDto: UpdateWebNameDto) {
    return await this.webNameRepo.update(updateWebNameDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number) {
    return await this.webNameRepo.destroy({ where: { id } });
  }
}

