import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkSquare2 = forwardRef<SVGSVGElement, IconProps>(
  function IconLinkSquare2(
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
              d="M8 18c-2.83 0-4.24 0-5.12-.88S2 14.82 2 12s0-4.24.88-5.12S5.18 6 8 6s4.24 0 5.12.88S14 9.18 14 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 12c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88 4.24 0 5.12-.88.88-2.3.88-5.12 0-4.24-.88-5.12S18.82 6 16 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
              fill="currentColor"
            />
            <path
              d="M9.2 7.25h.1c.9 0 1.65 0 2.24.08.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.9.08 2.24V12a.75.75 0 0 1-1.5 0c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07s-1.61 0-2.1.07c-.46.06-.65.17-.78.3s-.24.32-.3.79C6 10.39 6 11.04 6 12c0 .95 0 1.6.07 2.09.06.46.17.65.3.78s.32.24.79.3c.48.07 1.13.07 2.09.07a.75.75 0 0 1 0 1.5H9.2q-1.35.02-2.24-.08a2.7 2.7 0 0 1-1.65-.73 2.7 2.7 0 0 1-.73-1.64c-.08-.6-.08-1.35-.08-2.25v-.1c0-.9 0-1.65.08-2.24.08-.63.27-1.2.73-1.65a2.7 2.7 0 0 1 1.65-.73c.59-.08 1.34-.08 2.24-.08"
              fill="currentColor"
            />
            <path
              d="M16.84 8.82c-.48-.07-1.13-.07-2.09-.07a.75.75 0 0 1 0-1.5h.05c.9 0 1.65 0 2.24.08.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.9.08 2.24v.1q.02 1.35-.08 2.24c-.08.63-.27 1.2-.73 1.66s-1.02.64-1.65.72q-.89.1-2.24.08h-.1q-1.35.02-2.24-.08a2.7 2.7 0 0 1-1.65-.73 2.7 2.7 0 0 1-.73-1.64q-.1-.9-.08-2.25V12a.75.75 0 0 1 1.5 0c0 .96 0 1.61.07 2.1.06.46.17.65.3.78s.32.24.79.3c.48.07 1.13.07 2.09.07s1.61 0 2.1-.07c.46-.06.65-.17.78-.3s.24-.32.3-.78c.07-.49.07-1.14.07-2.1s0-1.61-.07-2.1c-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3"
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
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22M9.2 7.25h.1c.9 0 1.65 0 2.24.08.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.9.08 2.24V12a.75.75 0 0 1-1.5 0c0-.96 0-1.61-.07-2.1-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3c-.48-.07-1.13-.07-2.09-.07s-1.61 0-2.1.07c-.46.06-.65.17-.78.3s-.24.32-.3.79C6 10.39 6 11.04 6 12c0 .95 0 1.6.07 2.09.06.46.17.65.3.78s.32.24.79.3c.48.07 1.13.07 2.09.07a.75.75 0 0 1 0 1.5H9.2q-1.35.02-2.24-.08a2.7 2.7 0 0 1-1.65-.73 2.7 2.7 0 0 1-.73-1.64c-.08-.6-.08-1.35-.08-2.25v-.1c0-.9 0-1.65.08-2.24.08-.63.27-1.2.73-1.65a2.7 2.7 0 0 1 1.65-.73c.59-.08 1.34-.08 2.24-.08m7.64 1.57c-.48-.07-1.13-.07-2.09-.07a.75.75 0 0 1 0-1.5h.05c.9 0 1.65 0 2.24.08.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.9.08 2.24v.1q.02 1.35-.08 2.24c-.08.63-.27 1.2-.73 1.66s-1.02.64-1.65.72q-.89.1-2.24.08h-.1q-1.35.02-2.24-.08a2.7 2.7 0 0 1-1.65-.73 2.7 2.7 0 0 1-.73-1.64q-.1-.9-.08-2.25V12a.75.75 0 0 1 1.5 0c0 .96 0 1.61.07 2.1.06.46.17.65.3.78s.32.24.79.3c.48.07 1.13.07 2.09.07s1.61 0 2.1-.07c.46-.06.65-.17.78-.3s.24-.32.3-.78c.07-.49.07-1.14.07-2.1s0-1.61-.07-2.1c-.06-.46-.17-.65-.3-.78s-.32-.24-.79-.3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLinkSquare2;
