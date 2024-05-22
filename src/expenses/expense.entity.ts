import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'expenses' })
export class Expense {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  date: Date

  @Column()
  detail: string

  @Column()
  section: string

  @Column()
  value: number
}