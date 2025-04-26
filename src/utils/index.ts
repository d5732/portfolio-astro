export const createLogo = (name: string) =>
    name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();

