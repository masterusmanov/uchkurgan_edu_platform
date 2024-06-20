import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WebNameService } from './web-name.service';
import { CreateWebNameDto } from './dto/create-web-name.dto';
import { UpdateWebNameDto } from './dto/update-web-name.dto';

@Controller('web-name')
export class WebNameController {
  constructor(private readonly webNameService: WebNameService) {}

  @Post()
  create(@Body() createWebNameDto: CreateWebNameDto) {
    return this.webNameService.create(createWebNameDto);
  }

  @Get()
  findAll() {
    return this.webNameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webNameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebNameDto: UpdateWebNameDto) {
    return this.webNameService.update(+id, updateWebNameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webNameService.remove(+id);
  }
}
