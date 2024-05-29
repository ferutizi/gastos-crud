import { Body, Controller, Get, Param, Post, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateExpenseDto } from 'src/dto/createExpense.dto';
import { ExpensesService } from './expenses.service';
import { Expense } from './expense.entity';
import { updateExpenseDto } from 'src/dto/updateExpense.dto';

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

  @Get(':id')
  getExpenseById(@Param('id', ParseIntPipe) id: number) {
    return this.expensesService.getExpenseById(id)
  }

  @Delete(':id')
  deleteExpense(@Param('id', ParseIntPipe) id: number) {
    return this.expensesService.deleteExpense(id)
  }

  @Patch(':id')
  updateExpense(
    @Param('id', ParseIntPipe) id: number,
    @Body() expense: updateExpenseDto
  ) {
    return this.expensesService.updateExpense(id, expense)
  }
}
