import { Body, Controller, Post } from '@nestjs/common';
import { CreateExpenseDto } from 'src/dto/createExpense.dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {

  constructor(private expensesService: ExpensesService) { }

  @Post()
  createExpense(@Body() newExpense: CreateExpenseDto) {
    return this.expensesService.createExpense(newExpense)
  }
}
