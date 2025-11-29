export const AppType = {
  Bible: "Bible",
  Stopwatch: "Stopwatch",
  Welcome: "Welcome",
  Chooser: "Chooser",
  Donate: "Donate",
} as const;

export interface WindowState {
  appType: AppType;
}

export type AppType = typeof AppType[keyof typeof AppType];