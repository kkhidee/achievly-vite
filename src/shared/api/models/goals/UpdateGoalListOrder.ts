/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { BadRequest } from "../BadRequest";
import type { UpdateGoalListOrderBody } from "../UpdateGoalListOrderBody";
import type { UpdateResult } from "../UpdateResult";

export type UpdateGoalListOrder200 = UpdateResult;

export type UpdateGoalListOrder400 = BadRequest;

export type UpdateGoalListOrderMutationRequest = UpdateGoalListOrderBody[];

export type UpdateGoalListOrderMutationResponse = UpdateGoalListOrder200;

export type UpdateGoalListOrderMutation = {
  Response: UpdateGoalListOrder200;
  Request: UpdateGoalListOrderMutationRequest;
  Errors: UpdateGoalListOrder400;
};
