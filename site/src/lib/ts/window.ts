export const AppType = {
  Bible: "Bible",
  Stopwatch: "Stopwatch",
  Welcome: "Welcome",
  Chooser: "Chooser",
} as const;

export type Status = typeof AppType[keyof typeof AppType];