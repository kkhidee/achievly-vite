/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { badRequestSchema } from "../badRequestSchema";
import { updateProjectTaskListOrderBodySchema } from "../updateProjectTaskListOrderBodySchema";
import { updateResultSchema } from "../updateResultSchema";
import { z } from "zod";

export const updateProjectTaskListOrderPathParamsSchema = z.object({
  project_id: z.coerce.number(),
});

export type UpdateProjectTaskListOrderPathParamsSchema = z.infer<
  typeof updateProjectTaskListOrderPathParamsSchema
>;

export const updateProjectTaskListOrder200Schema = z.lazy(
  () => updateResultSchema,
);

export type UpdateProjectTaskListOrder200Schema = z.infer<
  typeof updateProjectTaskListOrder200Schema
>;

export const updateProjectTaskListOrder400Schema = z.lazy(
  () => badRequestSchema,
);

export type UpdateProjectTaskListOrder400Schema = z.infer<
  typeof updateProjectTaskListOrder400Schema
>;

export const updateProjectTaskListOrderMutationRequestSchema = z.array(
  z.lazy(() => updateProjectTaskListOrderBodySchema),
);

export type UpdateProjectTaskListOrderMutationRequestSchema = z.infer<
  typeof updateProjectTaskListOrderMutationRequestSchema
>;

export const updateProjectTaskListOrderMutationResponseSchema = z.lazy(
  () => updateProjectTaskListOrder200Schema,
);

export type UpdateProjectTaskListOrderMutationResponseSchema = z.infer<
  typeof updateProjectTaskListOrderMutationResponseSchema
>;
