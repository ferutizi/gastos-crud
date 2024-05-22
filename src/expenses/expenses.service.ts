import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from 'src/dto/createExpense.dto';

@Injectable()
export class ExpensesService {
  constructor(@InjectRepository(Expense) private expenseRepository: Repository<Expense>) { }

  createExpense(expense: CreateExpenseDto) {
    const newExpense = this.expenseRepository.create(expense)
    return this.expenseRepository.save(newExpense)
  }
}
