/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { badRequestSchema } from "../badRequestSchema";
import { z } from "zod";

export const deleteTeamPathParamsSchema = z.object({
  team_id: z.string(),
});

export type DeleteTeamPathParamsSchema = z.infer<
  typeof deleteTeamPathParamsSchema
>;

export const deleteTeam200Schema = z.unknown();

export type DeleteTeam200Schema = z.infer<typeof deleteTeam200Schema>;

export const deleteTeam400Schema = z.lazy(() => badRequestSchema);

export type DeleteTeam400Schema = z.infer<typeof deleteTeam400Schema>;

export const deleteTeamMutationResponseSchema = z.lazy(
  () => deleteTeam200Schema,
);

export type DeleteTeamMutationResponseSchema = z.infer<
  typeof deleteTeamMutationResponseSchema
>;
