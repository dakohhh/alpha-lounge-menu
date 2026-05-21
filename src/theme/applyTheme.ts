import type { Palette } from "./palettes";
import type { TypePair } from "./typography";

export function applyTheme(palette: Palette, type: TypePair): void {
  const root = document.documentElement;
  Object.entries(palette).forEach(([key, value]) => {
    if (typeof value === "string") {
      root.style.setProperty(`--c-${key}`, value);
    }
  });
  root.style.setProperty("--font-display", type.display);
  root.style.setProperty("--font-body", type.body);
  root.style.setProperty("--font-script", type.script);
  root.style.setProperty("--display-weight", String(type.displayWeight));
  root.style.setProperty("--display-letter", type.displayLetter);
}
