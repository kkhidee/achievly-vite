/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { badRequestSchema } from "../badRequestSchema";
import { z } from "zod";

export const leaveFromTeamPathParamsSchema = z.object({
  team_id: z.string(),
});

export type LeaveFromTeamPathParamsSchema = z.infer<
  typeof leaveFromTeamPathParamsSchema
>;

export const leaveFromTeam200Schema = z.unknown();

export type LeaveFromTeam200Schema = z.infer<typeof leaveFromTeam200Schema>;

export const leaveFromTeam400Schema = z.lazy(() => badRequestSchema);

export type LeaveFromTeam400Schema = z.infer<typeof leaveFromTeam400Schema>;

export const leaveFromTeamMutationResponseSchema = z.lazy(
  () => leaveFromTeam200Schema,
);

export type LeaveFromTeamMutationResponseSchema = z.infer<
  typeof leaveFromTeamMutationResponseSchema
>;
