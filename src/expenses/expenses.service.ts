import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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

  async getExpenseById(id: number) {
    const expenseFound = await this.expenseRepository.findOne({
      where: { id }
    })

    if (!expenseFound) {
      return new HttpException('Expense not found', HttpStatus.NOT_FOUND)
    }

    return expenseFound
  }

  async deleteExpense(id: number) {
    const result = await this.expenseRepository.delete({ id })

    if (result.affected === 0) {
      return new HttpException('Expense not found', HttpStatus.NOT_FOUND)
    }

    return this.expenseRepository.delete({ id })
  }

  async updateExpense(id: number, expense: updateExpenseDto) {
    const expenseFound = await this.expenseRepository.findOne({
      where: { id }
    })

    if (!expenseFound) {
      return new HttpException('Expense not found', HttpStatus.NOT_FOUND)
    }

    const updateExpense = Object.assign(expenseFound, expense)
    return this.expenseRepository.save(updateExpense)
  }
}
