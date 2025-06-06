/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type ProjectColumn = {
  /**
   * @description ID столбца проекта
   * @type string
   */
  id: string
  /**
   * @description Название столбца
   * @type string
   */
  name: string
  /**
   * @description Порядковый номер столбца
   * @type number
   */
  order: number
  /**
   * @description Признак удаления столбца
   * @type boolean
   */
  is_removable?: boolean | null
  /**
   * @description Признак разрешения создания задач в столбце
   * @type boolean
   */
  is_task_creation_allowed?: boolean | null
  /**
   * @description Признак столбца финального этапа
   * @type boolean
   */
  is_final_stage?: boolean | null
}