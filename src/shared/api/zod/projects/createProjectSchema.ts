/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { badRequestSchema } from "../badRequestSchema";
import { createProjectBodySchema } from "../createProjectBodySchema";
import { projectDtoSchema } from "../projectDtoSchema";
import { z } from "zod";

export const createProjectQueryParamsSchema = z.object({
  team_id: z.string(),
});

export type CreateProjectQueryParamsSchema = z.infer<
  typeof createProjectQueryParamsSchema
>;

export const createProject200Schema = z.lazy(() => projectDtoSchema);

export type CreateProject200Schema = z.infer<typeof createProject200Schema>;

export const createProject400Schema = z.lazy(() => badRequestSchema);

export type CreateProject400Schema = z.infer<typeof createProject400Schema>;

export const createProjectMutationRequestSchema = z.lazy(
  () => createProjectBodySchema,
);

export type CreateProjectMutationRequestSchema = z.infer<
  typeof createProjectMutationRequestSchema
>;

export const createProjectMutationResponseSchema = z.lazy(
  () => createProject200Schema,
);

export type CreateProjectMutationResponseSchema = z.infer<
  typeof createProjectMutationResponseSchema
>;
