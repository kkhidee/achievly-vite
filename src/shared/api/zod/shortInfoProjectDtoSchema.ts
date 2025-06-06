/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { z } from 'zod'

export const shortInfoProjectDtoSchema = z.object({
  id: z.number().describe('ID проекта'),
  name: z.string().describe('Название проекта'),
})

export type ShortInfoProjectDtoSchema = z.infer<typeof shortInfoProjectDtoSchema>