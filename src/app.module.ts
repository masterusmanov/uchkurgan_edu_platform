import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SequelizeModule } from '@nestjs/sequelize';
import { resolve } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { TelegrafModule } from 'nestjs-telegraf';
import { BOT_NAME } from './app.constants';
import { BotModule } from './bot/bot.module';
import { Bot } from './bot/models/bot.model';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        moddlewares: [],
        include: [BotModule],
      }),
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Bot],
      autoLoadModels: true,
      logging: false,
    }),
    JwtModule,
  ],
  providers: [],
  exports: [JwtModule],
})
export class AppModule {}
