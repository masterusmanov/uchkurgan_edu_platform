import { Module } from '@nestjs/common';
import { WebNameService } from './web-name.service';
import { WebNameController } from './web-name.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WebName } from './models/web-name.model';

@Module({
  imports: [SequelizeModule.forFeature([WebName])],
  controllers: [WebNameController],
  providers: [WebNameService],
})
export class WebNameModule {}
