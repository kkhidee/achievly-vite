/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { z } from 'zod'

export const goalBodyTaskSchema = z.object({
  id: z.number().describe('ID задачи').optional(),
  title: z.string().min(1).describe('Заголовок задачи'),
  deadline_date: z.string().describe('Дата окончания задачи').optional(),
  note: z.string().describe('Примечание задачи').optional(),
  done_date: z.string().describe('Дата выполнения задачи').optional(),
})

export type GoalBodyTaskSchema = z.infer<typeof goalBodyTaskSchema>