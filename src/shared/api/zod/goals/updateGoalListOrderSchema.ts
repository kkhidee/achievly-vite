/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { badRequestSchema } from "../badRequestSchema";
import { updateGoalListOrderBodySchema } from "../updateGoalListOrderBodySchema";
import { updateResultSchema } from "../updateResultSchema";
import { z } from "zod";

export const updateGoalListOrder200Schema = z.lazy(() => updateResultSchema);

export type UpdateGoalListOrder200Schema = z.infer<
  typeof updateGoalListOrder200Schema
>;

export const updateGoalListOrder400Schema = z.lazy(() => badRequestSchema);

export type UpdateGoalListOrder400Schema = z.infer<
  typeof updateGoalListOrder400Schema
>;

export const updateGoalListOrderMutationRequestSchema = z.array(
  z.lazy(() => updateGoalListOrderBodySchema),
);

export type UpdateGoalListOrderMutationRequestSchema = z.infer<
  typeof updateGoalListOrderMutationRequestSchema
>;

export const updateGoalListOrderMutationResponseSchema = z.lazy(
  () => updateGoalListOrder200Schema,
);

export type UpdateGoalListOrderMutationResponseSchema = z.infer<
  typeof updateGoalListOrderMutationResponseSchema
>;
