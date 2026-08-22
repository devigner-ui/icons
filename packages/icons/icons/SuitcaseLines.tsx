import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuitcaseLines = forwardRef<SVGSVGElement, IconProps>(
  function IconSuitcaseLines(
    { className, variant = "Outline", strokeWidth = "1.5", ...rest },
    ref,
  ) {
    /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
    const fill = variant === "Bold" || variant === "Bulk";
    const duotone = variant === "TwoTone" || variant === "Bulk";

    /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
    const labelled =
      rest["aria-label"] != null || rest["aria-labelledby"] != null;
    const a11y: SVGProps<SVGSVGElement> = labelled
      ? { role: "img" }
      : { "aria-hidden": true };

    return (
      <>
        {!fill ? (
          <svg
            ref={ref}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            {...a11y}
            {...rest}
          >
            <path
              d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 6c0-1.89 0-2.83-.59-3.41C14.83 2 13.9 2 12 2s-2.83 0-3.41.59C8 3.17 8 4.1 8 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 11h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 17h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          </svg>
        ) : duotone ? (
          <svg
            ref={ref}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            {...a11y}
            {...rest}
          >
            <path
              d="M12.05 1.25h-.1c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.34-.08 2.24v.08Q7.94 6 8.75 6c0-.96 0-1.61.07-2.1.06-.46.17-.65.3-.78s.32-.24.79-.3c.48-.07 1.13-.07 2.09-.07s1.61 0 2.1.07c.46.06.65.17.78.3s.24.32.3.79c.07.48.07 1.13.07 2.09q.81 0 1.5.03v-.08q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              fill="currentColor"
            />
            <path
              d="M2.08 17.75q-.06-.67-.07-1.5H22q-.01.83-.07 1.5z"
              fill="currentColor"
            />
            <path
              d="M21.92 10.25q.06.67.07 1.5H2q.01-.83.07-1.5z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            ref={ref}
            className={className}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            {...a11y}
            {...rest}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.05 1.25h-.1c-.9 0-1.65 0-2.24.08-.63.08-1.2.27-1.65.73a2.7 2.7 0 0 0-.73 1.65c-.08.6-.08 1.34-.08 2.24v.08c-2.02.06-3.23.3-4.08 1.14-.7.7-.98 1.64-1.1 3.08h19.85c-.11-1.44-.4-2.38-1.1-3.08-.84-.84-2.05-1.08-4.07-1.14v-.08q.02-1.35-.08-2.24a2.7 2.7 0 0 0-.73-1.65 2.7 2.7 0 0 0-1.65-.73c-.59-.08-1.34-.08-2.24-.08M15.25 6c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07s-1.61 0-2.1.07c-.46.06-.65.17-.78.3s-.24.32-.3.79c-.07.48-.07 1.13-.07 2.09z"
              fill="currentColor"
            />
            <path d="m2 14 .01-2.25H22V14l-.01 2.25H2z" fill="currentColor" />
            <path
              d="M2.08 17.75c.11 1.44.4 2.38 1.1 3.08C4.33 22 6.22 22 10 22h4c3.77 0 5.66 0 6.83-1.17.7-.7.98-1.64 1.1-3.08z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSuitcaseLines;
