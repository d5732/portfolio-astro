export const createLogo = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export const capitalize = (s: string) => s[0]?.toUpperCase() + s.slice(1);

export const getPageUri = (page: string) => (page === "home" ? "" : page);
