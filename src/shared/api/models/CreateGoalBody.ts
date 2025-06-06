/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { GoalBodyTask } from "./GoalBodyTask";

export type CreateGoalBody = {
  /**
   * @description Заголовок цели
   * @type string
   */
  title: string;
  /**
   * @description Категория цели
   * @type string
   */
  category: string;
  /**
   * @description Дата окончания цели
   * @type string
   */
  deadline_date?: string | null;
  /**
   * @description Примечание к цели
   * @type string
   */
  note?: string | null;
  /**
   * @description Задачи цели
   * @type array
   */
  tasks?: GoalBodyTask[] | null;
};
