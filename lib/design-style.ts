import type { CSSProperties } from "react";

/** Convert the reference's computed style strings to React style objects. */
export function css(value: string): CSSProperties {
  return Object.fromEntries(
    value
      .split(";")
      .filter((part) => part.includes(":"))
      .map((part) => {
        const colon = part.indexOf(":");
        return [
          part
            .slice(0, colon)
            .trim()
            .replace(/-([a-z])/g, (_, char: string) => char.toUpperCase()),
          part.slice(colon + 1).trim(),
        ];
      }),
  ) as CSSProperties;
}
