/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { ProjectColumn } from "./ProjectColumn";

export type UpdateProjectTaskBody = {
  /**
   * @description Наименование задачи
   * @type string
   */
  name?: string | null;
  /**
   * @description Описание задачи
   * @type string
   */
  description?: string | null;
  /**
   * @description Столбец задачи
   */
  column?: ProjectColumn | null;
  /**
   * @description Приоритет задачи
   * @type string
   */
  priority?: string | null;
  /**
   * @description ID исполнителя задачи
   * @type number
   */
  executor_member_id?: number | null;
  /**
   * @description Дедлайн задачи
   * @type string
   */
  deadline_date?: string | null;
  /**
   * @description Дата завершения задачи
   * @type string
   */
  done_date?: string | null;
};
