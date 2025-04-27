import { Page } from "@types";

export const getInitialsFromName = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export const capitalize = (s: string) => s[0]?.toUpperCase() + s.slice(1);

/** Helps resolve an empty string instead of "home" for the homepage */
export const getPageUri = (page: string) => (page === Page.Home ? "" : page);
