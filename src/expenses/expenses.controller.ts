import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateExpenseDto } from 'src/dto/createExpense.dto';
import { ExpensesService } from './expenses.service';
import { Expense } from './expense.entity';

@Controller('expenses')
export class ExpensesController {

  constructor(private expensesService: ExpensesService) { }

  @Post()
  createExpense(@Body() newExpense: CreateExpenseDto): Promise<Expense> {
    return this.expensesService.createExpense(newExpense)
  }

  @Get()
  getExpenses(): Promise<Expense[]> {
    return this.expensesService.getExpenses()
  }
}
