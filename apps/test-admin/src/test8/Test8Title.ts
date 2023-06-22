import { Test8 as TTest8 } from "../api/test8/Test8";

export const TEST8_TITLE_FIELD = "id";

export const Test8Title = (record: TTest8): string => {
  return record.id || String(record.id);
};
