import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserSpeakRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconUserSpeakRounded(
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
            <circle
              cx="10"
              cy="6.00049"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <ellipse
              opacity={duotone ? "0.4" : "1"}
              cx="10"
              cy="17.0005"
              rx="7"
              ry="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M19 2s2 1.2 2 4-2 4-2 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17 4s1 .6 1 2-1 2-1 2"
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
            <circle cx="10" cy="6.75049" r="4" fill="currentColor" />
            <ellipse
              opacity={duotone ? "0.4" : "1"}
              cx="10"
              cy="17.7505"
              rx="7"
              ry="4"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.36 2.36a.75.75 0 0 1 1.03-.25l-.39.64.39-.64h.01l.12.08.27.22a5.7 5.7 0 0 1 1.96 4.34 5.7 5.7 0 0 1-2.23 4.56l-.09.06-.03.01v.01h-.01l-.39-.64.39.64a.75.75 0 0 1-.78-1.28l.22-.17q.25-.18.58-.6c.41-.54.84-1.38.84-2.59a4.2 4.2 0 0 0-1.6-3.33l-.03-.03h-.01a.75.75 0 0 1-.25-1.03"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.33 4.42a.75.75 0 0 1 1-.34l-.33.67.34-.67h.01l.02.02.24.15q.2.15.48.47c.34.44.66 1.1.66 2.03s-.32 1.6-.66 2.03a3 3 0 0 1-.72.62l-.02.01-.01.01-.33-.66.33.66a.75.75 0 0 1-.69-1.33l.06-.04q.08-.05.2-.2c.16-.2.34-.53.34-1.1s-.18-.9-.34-1.1a1 1 0 0 0-.26-.23.75.75 0 0 1-.32-1"
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
            <circle cx="10" cy="6.75049" r="4" fill="currentColor" />
            <ellipse cx="10" cy="17.7505" rx="7" ry="4" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.36 2.36a.75.75 0 0 1 1.03-.25l-.39.64.39-.64h.01l.12.08.27.22a5.7 5.7 0 0 1 1.96 4.34 5.7 5.7 0 0 1-2.23 4.56l-.09.06-.03.01v.01h-.01l-.39-.64.39.64a.75.75 0 0 1-.78-1.28l.22-.17q.25-.18.58-.6c.41-.54.84-1.38.84-2.59a4.2 4.2 0 0 0-1.6-3.33l-.03-.03h-.01a.75.75 0 0 1-.25-1.03"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.33 4.42a.75.75 0 0 1 1-.34l-.33.67.34-.67h.01l.02.02.24.15q.2.15.48.47c.34.44.66 1.1.66 2.03s-.32 1.6-.66 2.03a3 3 0 0 1-.72.62l-.02.01-.01.01-.33-.66.33.66a.75.75 0 0 1-.69-1.33l.06-.04q.08-.05.2-.2c.16-.2.34-.53.34-1.1s-.18-.9-.34-1.1a1 1 0 0 0-.26-.23.75.75 0 0 1-.32-1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserSpeakRounded;
