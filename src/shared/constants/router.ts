const ROUTES = {
  home: "/",
  auth: "/auth",
  goals_board: "/goals/board",
  goals_list: "/goals/list",
  goals_statistics: "/goals/statistics",
  calendar: "/calendar",
  team_join: "/teams/:team_id/join",
  team_settings: "/teams/:team_id/settings",
  project: "/projects/:project_id",
};

const ROUTE_LABELS = {
  [ROUTES.home]: "Главная",
  [ROUTES.goals_board]: "Доска задач",
  [ROUTES.goals_list]: "Список целей",
  [ROUTES.goals_statistics]: "Статистика",
  [ROUTES.calendar]: "Календарь",
  [ROUTES.team_join]: "Присоединиться к команде",
  [ROUTES.team_settings]: "Настройки команды",
};

export { ROUTES, ROUTE_LABELS };
