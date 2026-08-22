import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotesMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconNotesMinimalistic(
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
              d="m20.31 12.65.52-1.93c.6-2.26.9-3.39.68-4.36a4 4 0 0 0-1.16-2.01c-.73-.69-1.86-1-4.12-1.6s-3.38-.9-4.36-.67a4 4 0 0 0-2 1.16c-.6.62-.9 1.54-1.35 3.2l-.25.91-.52 1.93c-.6 2.26-.9 3.39-.67 4.36a4 4 0 0 0 1.16 2.01c.73.69 1.86.99 4.11 1.6 2.03.54 3.15.84 4.06.72q.15 0 .3-.05a4 4 0 0 0 2.01-1.16c.69-.73.99-1.86 1.6-4.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.42 17.97a4 4 0 0 1-1.07 1.68c-.73.69-1.86.99-4.12 1.6-2.25.6-3.38.9-4.36.67a4 4 0 0 1-2-1.16c-.7-.73-1-1.86-1.6-4.11l-.52-1.93c-.6-2.26-.9-3.39-.67-4.36a4 4 0 0 1 1.16-2.01c.73-.69 1.86-1 4.11-1.6l1.17-.3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="m20.31 12.65.52-1.93c.6-2.26.9-3.39.68-4.36a4 4 0 0 0-1.16-2.01c-.73-.69-1.86-1-4.12-1.6s-3.38-.9-4.36-.67a4 4 0 0 0-2 1.16c-.6.62-.9 1.54-1.35 3.2l-.25.91-.52 1.93c-.6 2.26-.9 3.39-.67 4.36a4 4 0 0 0 1.16 2.01c.73.69 1.86.99 4.11 1.6 2.03.54 3.15.84 4.06.72q.15 0 .3-.05a4 4 0 0 0 2.01-1.16c.69-.73.99-1.86 1.6-4.11"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.41 17.97a4 4 0 0 1-1.06 1.68c-.73.69-1.86.99-4.12 1.6-2.25.6-3.38.9-4.36.67a4 4 0 0 1-2-1.16c-.7-.73-1-1.86-1.6-4.11l-.52-1.93c-.6-2.26-.9-3.39-.67-4.36a4 4 0 0 1 1.16-2.01c.73-.69 1.86-1 4.11-1.6l1.17-.3-.25.9-.52 1.93c-.6 2.26-.9 3.39-.67 4.36a4 4 0 0 0 1.16 2.01c.73.69 1.86.99 4.11 1.6 2.03.54 3.15.84 4.06.72"
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
              d="m20.06 12.65.52-1.93c.6-2.26.9-3.39.68-4.36a4 4 0 0 0-1.16-2.01c-.73-.69-1.86-1-4.12-1.6s-3.38-.9-4.36-.67a4 4 0 0 0-2 1.16c-.6.62-.9 1.54-1.35 3.2l-.25.91-.52 1.93c-.6 2.26-.9 3.39-.67 4.36a4 4 0 0 0 1.16 2.01c.73.69 1.86.99 4.11 1.6 2.03.54 3.15.84 4.06.72q.15 0 .3-.05a4 4 0 0 0 2.01-1.16c.69-.73.99-1.86 1.6-4.11"
              fill="currentColor"
            />
            <path
              d="m2.5 14.72.52 1.93c.6 2.25.9 3.38 1.6 4.11a4 4 0 0 0 2 1.16c.98.23 2.1-.07 4.36-.68 2.26-.6 3.39-.9 4.12-1.59l.17-.17a9 9 0 0 1-1.01-.15q-1.04-.22-2.5-.63l-.1-.02-.03-.01a35 35 0 0 1-2.67-.78 6 6 0 0 1-2-1.14 5.5 5.5 0 0 1-1.6-2.77 6 6 0 0 1 .02-2.3q.21-1.12.66-2.72l.53-2 .02-.07c-1.92.52-2.93.82-3.6 1.46a4 4 0 0 0-1.16 2c-.23.98.07 2.11.67 4.37"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotesMinimalistic;
