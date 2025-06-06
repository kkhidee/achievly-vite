/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { BadRequest } from "../BadRequest";

export type DeleteTeamPathParams = {
  /**
   * @type string
   */
  team_id: string;
};

export type DeleteTeam200 = unknown;

export type DeleteTeam400 = BadRequest;

export type DeleteTeamMutationResponse = DeleteTeam200;

export type DeleteTeamMutation = {
  Response: DeleteTeam200;
  PathParams: DeleteTeamPathParams;
  Errors: DeleteTeam400;
};
