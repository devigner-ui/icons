/*
 * What an old icon name becomes once the icon is renamed: the new component
 * under the old name, plus one console warning in development.
 *
 * The aliases themselves are written by tsup.config.ts from
 * scripts/renames.json, a few lines each that import the new icon, so a
 * deprecated name never carries a second copy of the drawing.
 *
 * Silent in production. Bundlers replace process.env.NODE_ENV with a literal,
 * so the check folds to `false` and the warning drops out of the build. Where
 * nothing replaces it (plain ESM in a browser) `process` does not exist and
 * the catch keeps the alias rendering instead of throwing.
 *
 * This is a .ts, not a .tsx: sync.mjs treats every .tsx in here as an icon.
 */
import { createElement, forwardRef } from "react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { IconProps } from "./types";

type IconComponentType = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;

declare const process: { env: { NODE_ENV?: string } };

function development(): boolean {
  try {
    return process.env.NODE_ENV !== "production";
  } catch {
    return false;
  }
}

/* Once per name per page load: an icon in a list would otherwise repeat the
   same sentence for every row. */
const warned = new Set<string>();

export function renamed(
  Icon: IconComponentType,
  from: string,
  message: string,
): IconComponentType {
  const Alias = forwardRef<SVGSVGElement, IconProps>(
    function Alias(props, ref) {
      if (development() && !warned.has(from)) {
        warned.add(from);
        console.warn(`[@devigner-ui/icons] ${message}`);
      }
      return createElement(Icon, { ...props, ref });
    },
  );
  Alias.displayName = `Icon${from}`;
  return Alias;
}
