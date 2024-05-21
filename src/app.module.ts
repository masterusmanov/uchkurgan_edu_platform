import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SequelizeModule } from '@nestjs/sequelize';
import { resolve } from 'path';
import { JwtModule } from '@nestjs/jwt';
// import { UserModule } from './user/user.module';
// import { CategoryModule } from './category/category.module';
// import { ProductsModule } from './products/products.module';
// import { PaymentsModule } from './payments/payments.module';
// import { PaymentMethodModule } from './payment_method/payment_method.module';
// import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
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
      models: [],
      autoLoadModels: true,
      logging: false,
    }),
    JwtModule,
    UsersModule,
    // UserModule,
    // CategoryModule,
    // ProductsModule,
    // PaymentsModule,
    // PaymentMethodModule,
    // OrdersModule
  ],
  providers: [],
  exports: [JwtModule],
})
export class AppModule {}
