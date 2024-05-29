import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import { CreateExpenseDto } from 'src/dto/createExpense.dto';
import { updateExpenseDto } from 'src/dto/updateExpense.dto';

@Injectable()
export class ExpensesService {
  constructor(@InjectRepository(Expense) private expenseRepository: Repository<Expense>) { }

  createExpense(expense: CreateExpenseDto) {
    const newExpense = this.expenseRepository.create(expense)
    return this.expenseRepository.save(newExpense)
  }

  getExpenses() {
    return this.expenseRepository.find()
  }

  getExpenseById(id: number) {
    return this.expenseRepository.findOne({
      where: { id }
    })
  }

  deleteExpense(id: number) {
    return this.expenseRepository.delete({ id })
  }

  updateExpense(id: number, expense: updateExpenseDto) {
    return this.expenseRepository.update({ id }, expense)
  }
}
