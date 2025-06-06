/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { BadRequest } from "../BadRequest";
import type { UserDto } from "../UserDto";

export type GetUser200 = UserDto;

export type GetUser404 = BadRequest;

export type GetUserQueryResponse = GetUser200;

export type GetUserQuery = {
  Response: GetUser200;
  Errors: GetUser404;
};
