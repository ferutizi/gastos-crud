import { USER, PASSWORD, PORT } from './data/constants';
import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: USER.USER,
      password: PASSWORD.PASSWORD,
      host: 'localhost',
      port: PORT.PORT,
      database: 'expensesdb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ExpensesModule
  ],
})
export class AppModule {}
