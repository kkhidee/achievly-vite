/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import { badRequestSchema } from "../badRequestSchema";
import { teamDtoSchema } from "../teamDtoSchema";
import { z } from "zod";

export const getTeamPathParamsSchema = z.object({
  team_id: z.string(),
});

export type GetTeamPathParamsSchema = z.infer<typeof getTeamPathParamsSchema>;

export const getTeam200Schema = z.lazy(() => teamDtoSchema);

export type GetTeam200Schema = z.infer<typeof getTeam200Schema>;

export const getTeam400Schema = z.lazy(() => badRequestSchema);

export type GetTeam400Schema = z.infer<typeof getTeam400Schema>;

export const getTeamQueryResponseSchema = z.lazy(() => getTeam200Schema);

export type GetTeamQueryResponseSchema = z.infer<
  typeof getTeamQueryResponseSchema
>;
